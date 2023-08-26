import { useContractRead } from '@thirdweb-dev/react';
import { useRhyzeTokenContract } from './useContract';

export const useRhyzeTokenContractRead = ({
  method,
  args,
}: {
  method: string;
  args?: any[];
}) => {
  const { contract } = useRhyzeTokenContract();
  const { data, error, isLoading } = useContractRead(contract, method, args);

  return {
    data,
    error,
    isLoading,
  };
};
