import { toast } from '@/app/ui/components/ui/use-toast';
import { useContractRead, useContractWrite } from '@thirdweb-dev/react';
import { useEffect } from 'react';
import { useRhyzeRaffleContract } from './useContract';

export const useRhyzeRaffleContractWrite = ({ method }: { method: string }) => {
  const { contract } = useRhyzeRaffleContract();
  const { mutateAsync, isLoading, error } = useContractWrite(contract, method);

  useEffect(() => {
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error?.toString(),
      });
    }
  }, [error]);

  return {
    mutateAsync,
    isLoading,
    error,
  };
};

export const useRhyzeRaffleContractRead = ({
  method,
  args,
}: {
  method: string;
  args?: any[];
}) => {
  const { contract } = useRhyzeRaffleContract();
  const { data, error, isLoading } = useContractRead(contract, method, args);

  return {
    data,
    error,
    isLoading,
  };
};
