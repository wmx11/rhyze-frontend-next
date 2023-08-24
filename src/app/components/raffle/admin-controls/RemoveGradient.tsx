import { useRhyzeRaffleContractWrite } from '@/app/hooks/web3/useRhyzeRaffle';
import { RAFFLE_PRIZE_GRADIENT_CLEAR } from '@/app/utils/web3/constants';
import React from 'react';

const RemoveGradient = () => {
  const { mutateAsync, isLoading } = useRhyzeRaffleContractWrite({
    method: RAFFLE_PRIZE_GRADIENT_CLEAR,
  });

  const handleRemoveGradient = () => {
    mutateAsync({ args: [] });
  };

  return (
    <>
      <div>
        <button
          className="btn btn-warning btn-block"
          disabled={isLoading}
          onClick={handleRemoveGradient}
        >
          {isLoading && <span className="loading loading-ring"></span>}
          Remove Gradient
        </button>
      </div>
    </>
  );
};

export default RemoveGradient;
