import { useRhyzeRaffleContractWrite } from '@/app/hooks/web3/useRhyzeRaffle';
import { RAFFLE_SET_RECYCLE_POT_PERCENTAGE } from '@/app/utils/web3/constants';
import React, { useState } from 'react';

const RecyclePotPercentage = () => {
  const [recyclePotPercentage, setRecyclePotPercentage] = useState(0);

  const { mutateAsync, isLoading } = useRhyzeRaffleContractWrite({
    method: RAFFLE_SET_RECYCLE_POT_PERCENTAGE,
  });

  /**
   * @params _recyclePotPercentage
   */
  const handleRecyclePotPercentage = () => {
    mutateAsync({ args: [recyclePotPercentage.toString()] });
  };

  return (
    <>
      <div className="space-y-8">
        <div className="form-control w-full">
          <input
            type="number"
            placeholder="Enter recycle pot percentage"
            className="input input-bordered w-full text-neutral"
            value={recyclePotPercentage}
            onChange={(e) =>
              setRecyclePotPercentage(parseInt(e.currentTarget.value, 10))
            }
          />
        </div>
        <button
          className="btn btn-warning btn-block"
          disabled={isLoading}
          onClick={handleRecyclePotPercentage}
        >
          {isLoading && <span className="loading loading-ring"></span>}
          Set %
        </button>
      </div>
    </>
  );
};

export default RecyclePotPercentage;
