import { ALLOWANCE, APPROVE } from '@/app/utils/web3/constants';
import { useContractRead, useContractWrite } from '@thirdweb-dev/react';
import { useRhyzeTokenContract } from './useContract';
import { fromBigNumberToSafeNumber } from '@/app/utils/web3/utils';

type UseRhyzeTokenAllowanceProps = {
  userAddress?: string;
  spender?: string;
};

export const useRhyzeTokenAllowance = ({
  userAddress,
  spender,
}: UseRhyzeTokenAllowanceProps) => {
  const { contract: rhyzeTokenContract } = useRhyzeTokenContract();

  // [owner, spender]
  const {
    data: rhyzeTokenAllowance,
    isLoading: isLoadingRead,
    error: errorRead,
  } = useContractRead(rhyzeTokenContract, ALLOWANCE, [userAddress, spender]);

  //
  const {
    mutateAsync: approve,
    isLoading: isLoadingWrite,
    error: errorWrite,
  } = useContractWrite(rhyzeTokenContract, APPROVE);

  return {
    spender,
    rhyzeTokenAllowance: fromBigNumberToSafeNumber(rhyzeTokenAllowance),
    isLoadingRead,
    errorRead,
    approve,
    isLoadingWrite,
    errorWrite,
  };
};
