import { createPublicClient, http, getContract, encodeFunctionData, encodePacked, parseAbi, parseErc6492Signature, formatUnits, hexToBigInt } from 'viem';
import { createBundlerClient } from 'viem/account-abstraction';
import { privateKeyToAccount } from 'viem/accounts';
import { toKernelSmartAccount } from 'permissionless/accounts';
import { entryPoint07Address } from 'viem/account-abstraction';
import { eip2612Permit, tokenAbi } from './circle-permit-helpers';

// Example config for Arbitrum Sepolia, should be made dynamic for production
export const ARBITRUM_SEPOLIA_USDC = '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d';
export const ARBITRUM_SEPOLIA_PAYMASTER = '0x31BE08D380A21fc740883c0BC434FcFc88740b58';
export const ARBITRUM_SEPOLIA_BUNDLER = 'https://public.pimlico.io/v2/421614/rpc';
export const MAX_GAS_USDC = BigInt(1000000); // 1 USDC

export async function transferERC20WithUsdcGas({
  privateKey,
  recipientAddress,
  amount,
  usdcAddress = ARBITRUM_SEPOLIA_USDC,
  paymasterAddress = ARBITRUM_SEPOLIA_PAYMASTER,
  bundlerUrl = ARBITRUM_SEPOLIA_BUNDLER,
  chain,
}) {
  // Create clients
  const client = createPublicClient({ chain, transport: http() });
  const bundlerClient = createBundlerClient({ client, transport: http(bundlerUrl) });
  // Create accounts
  const owner = privateKeyToAccount(privateKey);
  const account = await toKernelSmartAccount({
    client,
    entryPoint: { address: entryPoint07Address, version: '0.7' },
    owners: [owner],
    version: '0.3.1',
  });
  // Setup USDC contract
  const usdc = getContract({ client, address: usdcAddress, abi: tokenAbi });
  // Verify USDC balance first
  const balance = await usdc.read.balanceOf([account.address]);
  if (balance < amount) {
    throw new Error(`Insufficient USDC balance. Have: ${formatUnits(balance, 6)}, Need: ${formatUnits(amount, 6)}`);
  }
  // Construct and sign permit
  const permitData = await eip2612Permit({
    token: usdc,
    chain,
    ownerAddress: account.address,
    spenderAddress: paymasterAddress,
    value: MAX_GAS_USDC,
  });
  const signData = { ...permitData, primaryType: 'Permit' };
  const wrappedPermitSignature = await account.signTypedData(signData);
  const { signature: permitSignature } = parseErc6492Signature(wrappedPermitSignature);
  // Prepare transfer call
  const calls = [
    {
      to: usdc.address,
      abi: usdc.abi,
      functionName: 'transfer',
      args: [recipientAddress, amount],
    },
  ];
  // Specify the USDC Token Paymaster
  const paymaster = paymasterAddress;
  const paymasterData = encodePacked(
    ['uint8', 'address', 'uint256', 'bytes'],
    [0, usdc.address, MAX_GAS_USDC, permitSignature],
  );
  // Get additional gas charge from paymaster
  const additionalGasCharge = hexToBigInt(
    (
      await client.call({
        to: paymaster,
        data: encodeFunctionData({
          abi: parseAbi(['function additionalGasCharge() returns (uint256)']),
          functionName: 'additionalGasCharge',
        }),
      })
    )?.data ?? '0x',
  );
  // Get current gas prices
  const { standard: fees } = (await bundlerClient.request({
    method: 'pimlico_getUserOperationGasPrice',
  })) as {
    standard: {
      maxFeePerGas: `0x${string}`;
      maxPriorityFeePerGas: `0x${string}`;
    };
  };
  const maxFeePerGas = hexToBigInt(fees.maxFeePerGas);
  const maxPriorityFeePerGas = hexToBigInt(fees.maxPriorityFeePerGas);
  // Estimate gas limits
  const {
    callGasLimit,
    preVerificationGas,
    verificationGasLimit,
    paymasterPostOpGasLimit,
    paymasterVerificationGasLimit,
  } = await bundlerClient.estimateUserOperationGas({
    account,
    calls,
    paymaster,
    paymasterData,
    paymasterPostOpGasLimit: additionalGasCharge,
    maxFeePerGas: 1n,
    maxPriorityFeePerGas: 1n,
  });
  // Send user operation
  const userOpHash = await bundlerClient.sendUserOperation({
    account,
    calls,
    callGasLimit,
    preVerificationGas,
    verificationGasLimit,
    paymaster,
    paymasterData,
    paymasterVerificationGasLimit,
    paymasterPostOpGasLimit: BigInt(Math.max(Number(paymasterPostOpGasLimit), Number(additionalGasCharge))),
    maxFeePerGas,
    maxPriorityFeePerGas,
  });
  // Wait for receipt
  const userOpReceipt = await bundlerClient.waitForUserOperationReceipt({ hash: userOpHash });
  return userOpReceipt;
}
