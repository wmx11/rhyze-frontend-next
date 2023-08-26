import { CHAIN_ID_POLYGON, CHAIN_ID_POLYGON_MUMBAI } from './constants';

export const web3config = {
  contracts: {
    [CHAIN_ID_POLYGON]: {
      rhyzeRaffle: {
        address: '0xBf55A3B212fA9914d8dbC61C494Aa8274Ea5bdA2',
        decimals: 18,
      },
      rhyzeToken: {
        address: '0xE88306412Bbe3118DA00079742425B2c15cc3E63',
        decimals: 18,
      },
      usdc: {
        address: '',
        decimals: 18,
        symbol: 'USDC',
      },
    },
    [CHAIN_ID_POLYGON_MUMBAI]: {
      rhyzeRaffle: {
        address: '0x2D363Da46691b58621A50DF14286b50642f03577',
        decimals: 18,
      },
      rhyzeToken: {
        address: '0xe88306412bbe3118da00079742425b2c15cc3e63',
        decimals: 18,
      },
      usdc: {
        address: '',
        decimals: 18,
        symbol: 'USDC',
      },
    },
  },
  getContractByChainId(chainId?: number) {
    if (!chainId) {
      return null;
    }
    return this.contracts[chainId as keyof typeof this.contracts];
  },
};
