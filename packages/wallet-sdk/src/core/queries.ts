import { getSupportedNetworks, getRpcUrl } from './chains.js';
import * as services from './services/index.js';
import type { Address, Hash } from 'viem';

// EVM API functions for wallet app usage

export async function getChainInfoByNetwork(network: string) {
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

export async function getEthereumChainInfo() {
  return getChainInfoByNetwork('ethereum');
}

export async function getBlockByNumber(network: string, blockNumber: string) {
  try {
    const block = await services.getBlockByNumber(parseInt(blockNumber), network);
    return block;
  } catch (error) {
    throw new Error(`Error fetching block: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export async function getBlockByHash(network: string, blockHash: string) {
  try {
    const block = await services.getBlockByHash(blockHash as Hash, network);
    return block;
  } catch (error) {
    throw new Error(`Error fetching block with hash: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export async function getLatestBlock(network: string) {
  try {
    const block = await services.getLatestBlock(network);
    return block;
  } catch (error) {
    throw new Error(`Error fetching latest block: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export async function getDefaultLatestBlock() {
  return getLatestBlock('ethereum');
}

export async function getETHBalance(network: string, address: string) {
  try {
    const balance = await services.getETHBalance(address as Address, network);
    return {
      network,
      address,
      balance: {
        wei: balance.wei.toString(),
        ether: balance.ether,
      },
    };
  } catch (error) {
    throw new Error(`Error fetching ETH balance: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export async function getDefaultETHBalance(address: string) {
  return getETHBalance('ethereum', address);
}

export async function getERC20Balance(network: string, address: string, tokenAddress: string) {
  try {
    const balance = await services.getERC20Balance(tokenAddress as Address, address as Address, network);
    return {
      network,
      address,
      tokenAddress,
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

export async function getDefaultERC20Balance(address: string, tokenAddress: string) {
  return getERC20Balance('ethereum', address, tokenAddress);
}

export async function getTransactionDetails(network: string, txHash: string) {
  try {
    const tx = await services.getTransaction(txHash as Hash, network);
    return tx;
  } catch (error) {
    throw new Error(`Error fetching transaction: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export async function getDefaultTransactionByHash(txHash: string) {
  return getTransactionDetails('ethereum', txHash);
}

export function getSupportedEVMNetworks() {
  try {
    return getSupportedNetworks();
  } catch (error) {
    throw new Error(`Error fetching supported networks: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export async function getERC20TokenDetails(network: string, tokenAddress: string) {
  try {
    const tokenInfo = await services.getERC20TokenInfo(tokenAddress as Address, network);
    return {
      address: tokenAddress,
      network,
      ...tokenInfo,
    };
  } catch (error) {
    throw new Error(`Error fetching ERC20 token info: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export async function getERC20TokenAddressBalance(network: string, tokenAddress: string, address: string) {
  try {
    const balance = await services.getERC20Balance(tokenAddress as Address, address as Address, network);
    return {
      tokenAddress,
      owner: address,
      network,
      raw: balance.raw.toString(),
      formatted: balance.formatted,
      symbol: balance.token.symbol,
      decimals: balance.token.decimals,
    };
  } catch (error) {
    throw new Error(`Error fetching ERC20 token balance: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export async function getERC721NFTTokenDetails(
  network: string,
  tokenAddress: string,
  tokenId: string,
  address?: string,
) {
  try {
    const tokenAddr = tokenAddress as Address;
    const tid = BigInt(tokenId);
    const nftInfo = await services.getERC721TokenMetadata(tokenAddr, tid, network);
    let owner = 'Unknown';
    if (address) {
      try {
        const isOwner = await services.isNFTOwner(tokenAddr, address as Address, tid, network);
        if (isOwner) owner = address;
      } catch {}
    }
    return {
      contract: tokenAddress,
      tokenId: tokenId.toString(),
      network,
      ...nftInfo,
      owner,
    };
  } catch (error) {
    throw new Error(`Error fetching NFT info: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export async function checkERC721NFTOwnership(network: string, tokenAddress: string, tokenId: string, address: string) {
  try {
    const isOwner = await services.isNFTOwner(tokenAddress as Address, address as Address, BigInt(tokenId), network);
    return {
      contract: tokenAddress,
      tokenId: tokenId.toString(),
      owner: address,
      network,
      isOwner,
    };
  } catch (error) {
    throw new Error(`Error checking NFT ownership: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export async function getERC1155TokenMetadataURI(network: string, tokenAddress: string, tokenId: string) {
  try {
    const tokenURI = await services.getERC1155TokenURI(tokenAddress as Address, BigInt(tokenId), network);
    return {
      contract: tokenAddress,
      tokenId: tokenId.toString(),
      network,
      uri: tokenURI,
    };
  } catch (error) {
    throw new Error(`Error fetching ERC1155 token URI: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export async function getERC1155TokenAddressBalance(
  network: string,
  tokenAddress: string,
  tokenId: string,
  address: string,
) {
  try {
    const balance = await services.getERC1155Balance(
      tokenAddress as Address,
      address as Address,
      BigInt(tokenId),
      network,
    );
    return {
      contract: tokenAddress,
      tokenId: tokenId.toString(),
      owner: address,
      network,
      balance: balance.toString(),
    };
  } catch (error) {
    throw new Error(`Error fetching ERC1155 token balance: ${error instanceof Error ? error.message : String(error)}`);
  }
}
