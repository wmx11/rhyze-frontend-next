import React from 'react';
import H2 from '../../H2';
import { useRhyzeRaffleContractWrite } from '@/app/hooks/web3/useRhyzeRaffle';
import { RAFFLE_SALE_SLATE } from '@/app/utils/web3/constants';

const ToggleSaleSlate = () => {
  const { mutateAsync, isLoading } = useRhyzeRaffleContractWrite({
    method: RAFFLE_SALE_SLATE,
  });

  const handleToggleSaleSlate = () => {
    mutateAsync({ args: [] });
  };

  return (
    <>
      <div className="space-y-8">
        <H2 className="underline">Sale is active</H2>
        <button
          className="btn btn-warning btn-block"
          disabled={isLoading}
          onClick={handleToggleSaleSlate}
        >
          {isLoading && <span className="loading loading-ring"></span>}Sale
          On/Off
        </button>
      </div>
    </>
  );
};

export default ToggleSaleSlate;
