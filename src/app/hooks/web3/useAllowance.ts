import { ALLOWANCE, APPROVE } from '@/app/utils/web3/constants';
import { useContractRead, useContractWrite } from '@thirdweb-dev/react';
import { useRhyzeTokenContract } from './useContract';
import { fromBigNumberToSafeNumber } from '@/app/utils/web3/utils';
import { useEffect } from 'react';
import { toast } from '@/app/ui/components/ui/use-toast';

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
    isLoading: isLoadingReadAllowance,
    error: errorReadAllowance,
  } = useContractRead(rhyzeTokenContract, ALLOWANCE, [userAddress, spender]);

  const {
    mutateAsync: approve,
    isLoading: isLoadingWriteApprove,
    error: errorWriteApprove,
  } = useContractWrite(rhyzeTokenContract, APPROVE);

  useEffect(() => {
    if (errorReadAllowance || errorWriteApprove) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: [
          errorReadAllowance?.toString() || '',
          errorWriteApprove?.toString() || '',
        ].join(', '),
      });
    }
  }, [errorReadAllowance, errorWriteApprove]);

  return {
    spender,
    rhyzeTokenAllowance: fromBigNumberToSafeNumber(rhyzeTokenAllowance),
    isLoadingReadAllowance,
    errorReadAllowance,
    approve,
    isLoadingWriteApprove,
    errorWriteApprove,
  };
};
