import { useChainId, useContract } from '@thirdweb-dev/react';
import raffleABI from '@/app/utils/web3/abi/raffle.abi.json';
import rhyzeABI from '@/app/utils/web3/abi/rhyze.abi.json';
import { web3config } from '@/app/utils/web3/config';

export const useRhyzeRaffleContract = () => {
  const chainId = useChainId();

  if (!chainId) {
    console.error('Chain ID not provided');
  }

  const contractAddress =
    web3config.getContractByChainId(chainId)?.rhyzeRaffle?.address;

  if (!contractAddress) {
    console.error(`Raffle contract address on chain ${chainId} not found`);
  }

  const { contract } = useContract(contractAddress, raffleABI);

  return { contract, contractAddress };
};

export const useRhyzeTokenContract = () => {
  const chainId = useChainId();

  if (!chainId) {
    console.error('Chain ID not provided');
  }

  const contractAddress =
    web3config.getContractByChainId(chainId)?.rhyzeToken?.address;

  if (!contractAddress) {
    console.error(`Raffle contract address on chain ${chainId} not found`);
  }

  const { contract } = useContract(contractAddress, rhyzeABI);

  return { contract, contractAddress };
};
