import { getSupportedNetworks, getRpcUrl } from './chains.js';
import * as services from './services/index.js';
import { type Address, type Hex, type Hash } from 'viem';
import { normalize } from 'viem/ens';

// NETWORK INFORMATION TOOLS

export async function getChainInfo(network: string = 'ethereum') {
  try {
    const chainId = await services.getChainId(network);
    const blockNumber = await services.getBlockNumber(network);
    const rpcUrl = getRpcUrl(network);
    return {
      network,
      chainId,
      blockNumber: blockNumber.toString(),
      rpcUrl,
    };
  } catch (error) {
    throw new Error(`Error fetching chain info: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function resolveEns(ensName: string, network: string = 'ethereum') {
  try {
    if (!ensName.includes('.')) {
      throw new Error(`Input "${ensName}" is not a valid ENS name. ENS names must contain a dot (e.g., 'name.eth').`);
    }
    const normalizedEns = normalize(ensName);
    const address = await services.resolveAddress(ensName, network);
    return {
      ensName,
      normalizedName: normalizedEns,
      resolvedAddress: address,
      network,
    };
  } catch (error) {
    throw new Error(`Error resolving ENS name: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export function getSupportedNetworksApi() {
  try {
    const networks = getSupportedNetworks();
    return { supportedNetworks: networks };
  } catch (error) {
    throw new Error(`Error fetching supported networks: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function getBlockByNumber(blockNumber: number, network: string = 'ethereum') {
  try {
    const block = await services.getBlockByNumber(blockNumber, network);
    return block;
  } catch (error) {
    throw new Error(`Error fetching block ${blockNumber}: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function getLatestBlock(network: string = 'ethereum') {
  try {
    const block = await services.getLatestBlock(network);
    return block;
  } catch (error) {
    throw new Error(`Error fetching latest block: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function getBalance(address: string, network: string = 'ethereum') {
  try {
    const balance = await services.getETHBalance(address, network);
    return {
      address,
      network,
      wei: balance.wei.toString(),
      ether: balance.ether,
    };
  } catch (error) {
    throw new Error(`Error fetching balance: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function getERC20Balance(address: string, tokenAddress: string, network: string = 'ethereum') {
  try {
    const balance = await services.getERC20Balance(tokenAddress as Address, address as Address, network);
    return {
      address,
      tokenAddress,
      network,
      balance: {
        raw: balance.raw.toString(),
        formatted: balance.formatted,
        decimals: balance.token.decimals,
      },
    };
  } catch (error) {
    throw new Error(`Error fetching ERC20 balance: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function getTokenBalance(tokenAddress: string, ownerAddress: string, network: string = 'ethereum') {
  try {
    const balance = await services.getERC20Balance(tokenAddress, ownerAddress, network);
    return {
      tokenAddress,
      owner: ownerAddress,
      network,
      raw: balance.raw.toString(),
      formatted: balance.formatted,
      symbol: balance.token.symbol,
      decimals: balance.token.decimals,
    };
  } catch (error) {
    throw new Error(`Error fetching token balance: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function getTransaction(txHash: string, network: string = 'ethereum') {
  try {
    const tx = await services.getTransaction(txHash as Hash, network);
    return tx;
  } catch (error) {
    throw new Error(`Error fetching transaction ${txHash}: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function getTransactionReceipt(txHash: string, network: string = 'ethereum') {
  try {
    const receipt = await services.getTransactionReceipt(txHash as Hash, network);
    return receipt;
  } catch (error) {
    throw new Error(`Error fetching transaction receipt ${txHash}: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function estimateGas({ to, value, data, network = 'ethereum' }: { to: string, value?: string, data?: string, network?: string }) {
  try {
    const params: any = { to: to as Address };
    if (value) params.value = services.helpers.parseEther(value);
    if (data) params.data = data as `0x${string}`;
    const gas = await services.estimateGas(params, network);
    return {
      network,
      estimatedGas: gas.toString(),
    };
  } catch (error) {
    throw new Error(`Error estimating gas: ${error instanceof Error ? error.message : String(error)}`);
  }
}


// TRANSFER TOOLS
export async function transferETH(privateKey: string, to: string, amount: string, network: string = 'ethereum') {
  try {
    const txHash = await services.transferETH(privateKey, to, amount, network);
    return {
      success: true,
      txHash,
      to,
      amount,
      network,
    };
  } catch (error) {
    throw new Error(`Error transferring ETH: ${error instanceof Error ? error.message : String(error)}`);
  }
}


import { transferERC20WithUsdcGas, ARBITRUM_SEPOLIA_USDC, ARBITRUM_SEPOLIA_PAYMASTER, ARBITRUM_SEPOLIA_BUNDLER } from './services/circle-paymaster.js';

/**
 * Transfer ERC20 tokens, optionally using USDC as gas via Circle Paymaster (account abstraction)
 * @param privateKey Sender's private key
 * @param tokenAddress ERC20 token contract address
 * @param toAddress Recipient address
 * @param amount Amount to send (in token units, string or bigint)
 * @param network Network name or chain ID
 * @param gasAsset 'usdc' (default) or 'native' (ETH, MATIC, etc.)
 * @param options Optional: usdcAddress, paymasterAddress, bundlerUrl, chain (for advanced config)
 */
export async function transferERC20(
  privateKey: string,
  tokenAddress: string,
  toAddress: string,
  amount: string,
  network: string = 'ethereum',
  gasAsset: 'usdc' | 'native' = 'usdc',
  options?: {
    usdcAddress?: string,
    paymasterAddress?: string,
    bundlerUrl?: string,
    chain?: any,
  }
) {
  try {
    if (gasAsset === 'usdc') {
      // Use Circle Paymaster account abstraction logic
      // Only works on supported networks (e.g., Arbitrum Sepolia, Base, etc.)
      const usdcAddress = options?.usdcAddress || ARBITRUM_SEPOLIA_USDC;
      const paymasterAddress = options?.paymasterAddress || ARBITRUM_SEPOLIA_PAYMASTER;
      const bundlerUrl = options?.bundlerUrl || ARBITRUM_SEPOLIA_BUNDLER;
      const chain = options?.chain;
      // Convert amount to bigint (USDC 6 decimals)
  // Use Number for compatibility if BigInt is not available
  const amountBigInt = typeof amount === 'bigint' ? amount : Number(Math.floor(parseFloat(amount) * 1_000_000));
      const receipt = await transferERC20WithUsdcGas({
        privateKey: privateKey as `0x${string}`,
        recipientAddress: toAddress,
        amount: amountBigInt,
        usdcAddress,
        paymasterAddress,
        bundlerUrl,
        chain,
      });
      return {
        success: true,
        txHash: (receipt && (receipt.userOpHash || receipt.transactionHash)) || undefined,
        network,
        tokenAddress,
        recipient: toAddress,
        amount,
        symbol: 'USDC',
        paymaster: paymasterAddress,
        bundler: bundlerUrl,
        accountAbstraction: true,
      };
    } else {
      // Standard EOA transfer (native gas)
      const formattedKey = (typeof privateKey === 'string' && privateKey.indexOf('0x') === 0)
        ? (privateKey as `0x${string}`)
        : (`0x${privateKey}` as `0x${string}`);
      const result = await services.transferERC20(tokenAddress as Address, toAddress as Address, amount, formattedKey, network);
      return {
        success: true,
        txHash: result.txHash,
        network,
        tokenAddress,
        recipient: toAddress,
        amount: result.amount.formatted,
        symbol: result.token.symbol,
        accountAbstraction: false,
      };
    }
  } catch (error) {
    throw new Error(`Error transferring ERC20 tokens: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function approveTokenSpending(privateKey: string, tokenAddress: string, spenderAddress: string, amount: string, network: string = 'ethereum') {
  try {
    const formattedKey = (typeof privateKey === 'string' && privateKey.indexOf('0x') === 0)
      ? (privateKey as `0x${string}`)
      : (`0x${privateKey}` as `0x${string}`);
    const result = await services.approveERC20(tokenAddress as Address, spenderAddress as Address, amount, formattedKey, network);
    return {
      success: true,
      txHash: result.txHash,
      network,
      tokenAddress,
      spender: spenderAddress,
      amount: result.amount.formatted,
      symbol: result.token.symbol,
    };
  } catch (error) {
    throw new Error(`Error approving token spending: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function transferNFT(privateKey: string, tokenAddress: string, tokenId: string, toAddress: string, network: string = 'ethereum') {
  try {
    const formattedKey = privateKey.startsWith('0x') ? (privateKey as `0x${string}`) : (`0x${privateKey}` as `0x${string}`);
  const result = await services.transferERC721(tokenAddress as Address, toAddress as Address, Number(tokenId), formattedKey, network);
    return {
      success: true,
      txHash: result.txHash,
      network,
      collection: tokenAddress,
      tokenId: result.tokenId,
      recipient: toAddress,
      name: result.token.name,
      symbol: result.token.symbol,
    };
  } catch (error) {
    throw new Error(`Error transferring NFT: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function transferERC1155(privateKey: string, tokenAddress: string, tokenId: string, amount: string, toAddress: string, network: string = 'ethereum') {
  try {
    const formattedKey = (typeof privateKey === 'string' && privateKey.indexOf('0x') === 0)
      ? (privateKey as `0x${string}`)
      : (`0x${privateKey}` as `0x${string}`);
  const result = await services.transferERC1155(tokenAddress as Address, toAddress as Address, Number(tokenId), amount, formattedKey, network);
    return {
      success: true,
      txHash: result.txHash,
      network,
      contract: tokenAddress,
      tokenId: result.tokenId,
      amount: result.amount,
      recipient: toAddress,
    };
  } catch (error) {
    throw new Error(`Error transferring ERC1155 tokens: ${error instanceof Error ? error.message : String(error)}`);
  }
}


/**
 * Alias for transferERC20, for compatibility
 */
export async function transferToken(
  privateKey: string,
  tokenAddress: string,
  toAddress: string,
  amount: string,
  network: string = 'ethereum',
  gasAsset: 'usdc' | 'native' = 'usdc',
  options?: {
    usdcAddress?: string,
    paymasterAddress?: string,
    bundlerUrl?: string,
    chain?: any,
  }
) {
  return transferERC20(privateKey, tokenAddress, toAddress, amount, network, gasAsset, options);
}


// CONTRACT TOOLS
export async function readContract(contractAddress: string, abi: any[], functionName: string, args: any[] = [], network: string = 'ethereum') {
  try {
    const params = {
      address: contractAddress as Address,
      abi,
      functionName,
      args,
    };
  const result = await services.readContract(params, network);
    return result;
  } catch (error) {
    throw new Error(`Error reading contract: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function writeContract(contractAddress: string, abi: any[], functionName: string, args: any[], privateKey: string, network: string = 'ethereum') {
  try {
    const contractParams: Record<string, any> = {
      address: contractAddress as Address,
      abi,
      functionName,
      args,
    };
    const txHash = await services.writeContract(privateKey as Hex, contractParams, network);
    return {
      network,
      transactionHash: txHash,
      message: 'Contract write transaction sent successfully',
    };
  } catch (error) {
    throw new Error(`Error writing to contract: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function isContract(address: string, network: string = 'ethereum') {
  try {
    const isContract = await services.isContract(address, network);
    return {
      address,
      network,
      isContract,
      type: isContract ? 'Contract' : 'Externally Owned Account (EOA)',
    };
  } catch (error) {
    throw new Error(`Error checking if address is a contract: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function getTokenInfo(tokenAddress: string, network: string = 'ethereum') {
  try {
    const tokenInfo = await services.getERC20TokenInfo(tokenAddress as Address, network);
    return {
      address: tokenAddress,
      network,
      ...tokenInfo,
    };
  } catch (error) {
    throw new Error(`Error fetching token info: ${error instanceof Error ? error.message : String(error)}`);
  }
}


// get_token_balance_erc20 is already covered by getERC20Balance above


export async function getNFTInfo(tokenAddress: string, tokenId: string, network: string = 'ethereum') {
  try {
  const nftInfo = await services.getERC721TokenMetadata(tokenAddress as Address, Number(tokenId), network);
    let owner = null;
    try {
      owner = await services.getPublicClient(network).readContract({
        address: tokenAddress as Address,
        abi: [
          {
            inputs: [{ type: 'uint256' }],
            name: 'ownerOf',
            outputs: [{ type: 'address' }],
            stateMutability: 'view',
            type: 'function',
          },
        ],
        functionName: 'ownerOf',
        args: [Number(tokenId)],
      });
    } catch (e) {
      // Ownership info not available
    }
    return {
      contract: tokenAddress,
      tokenId,
      network,
      ...nftInfo,
      owner: owner || 'Unknown',
    };
  } catch (error) {
    throw new Error(`Error fetching NFT info: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function checkNFTOwnership(tokenAddress: string, tokenId: string, ownerAddress: string, network: string = 'ethereum') {
  try {
  const isOwner = await services.isNFTOwner(tokenAddress, ownerAddress, Number(tokenId), network);
    return {
      tokenAddress,
      tokenId,
      ownerAddress,
      network,
      isOwner,
      result: isOwner ? 'Address owns this NFT' : 'Address does not own this NFT',
    };
  } catch (error) {
    throw new Error(`Error checking NFT ownership: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function getERC1155TokenURI(tokenAddress: string, tokenId: string, network: string = 'ethereum') {
  try {
  const uri = await services.getERC1155TokenURI(tokenAddress as Address, Number(tokenId), network);
    return {
      contract: tokenAddress,
      tokenId,
      network,
      uri,
    };
  } catch (error) {
    throw new Error(`Error fetching ERC1155 token URI: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function getNFTBalance(tokenAddress: string, ownerAddress: string, network: string = 'ethereum') {
  try {
    const balance = await services.getERC721Balance(tokenAddress as Address, ownerAddress as Address, network);
    return {
      collection: tokenAddress,
      owner: ownerAddress,
      network,
      balance: balance.toString(),
    };
  } catch (error) {
    throw new Error(`Error fetching NFT balance: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export async function getERC1155Balance(tokenAddress: string, tokenId: string, ownerAddress: string, network: string = 'ethereum') {
  try {
  const balance = await services.getERC1155Balance(tokenAddress as Address, ownerAddress as Address, Number(tokenId), network);
    return {
      contract: tokenAddress,
      tokenId,
      owner: ownerAddress,
      network,
      balance: balance.toString(),
    };
  } catch (error) {
    throw new Error(`Error fetching ERC1155 token balance: ${error instanceof Error ? error.message : String(error)}`);
  }
}


export function getAddressFromPrivateKey(privateKey: string) {
  try {
    const formattedKey = (typeof privateKey === 'string' && privateKey.indexOf('0x') === 0)
      ? (privateKey as Hex)
      : (`0x${privateKey}` as Hex);
    const address = services.getAddressFromPrivateKey(formattedKey);
    return {
      address,
      privateKey: '0x' + privateKey.replace(/^0x/, ''),
    };
  } catch (error) {
    throw new Error(`Error deriving address from private key: ${error instanceof Error ? error.message : String(error)}`);
  }
}
