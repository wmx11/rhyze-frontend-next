import { useRhyzeRaffleContractWrite } from '@/app/hooks/web3/useRhyzeRaffle';
import { RAFFLE_CREATE_NEW_RAFFLE } from '@/app/utils/web3/constants';
import { toBigNumber } from '@/app/utils/web3/utils';
import { useState } from 'react';

const CreateNewRaffle = () => {
  const [price, setPrice] = useState(0);
  const [minPot, setMinPot] = useState(0);
  const [numberOfWinners, setNumberOfWinners] = useState(0);
  const [canWinMultipleTimes, setCanWinMultipleTimes] = useState('false');

  const { mutateAsync, isLoading } = useRhyzeRaffleContractWrite({
    method: RAFFLE_CREATE_NEW_RAFFLE,
  });

  const handleCreateNewRaffle = () => {
    // [_price, _minimumPot, _numberOfWinners, _multiWinOption]
    mutateAsync({
      args: [
        toBigNumber(price).toString(),
        toBigNumber(minPot).toString(),
        numberOfWinners.toString(),
        canWinMultipleTimes.toString(),
      ],
    });
  };

  return (
    <>
      <div>
        <div className="mb-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Enter price"
              className="input input-bordered w-full text-neutral"
              value={price}
              onChange={(e) => setPrice(parseInt(e.currentTarget.value, 10))}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Minimum Pot</span>
            </label>
            <input
              type="number"
              placeholder="Enter minimum pot"
              className="input input-bordered w-full text-neutral"
              value={minPot}
              onChange={(e) => setMinPot(parseInt(e.currentTarget.value, 10))}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Number of Winners</span>
            </label>
            <input
              type="number"
              placeholder="Enter number of winners"
              className="input input-bordered w-full text-neutral"
              value={numberOfWinners}
              onChange={(e) =>
                setNumberOfWinners(parseInt(e.currentTarget.value, 10))
              }
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Can the same wallet win multiple times?
              </span>
            </label>
            <select
              className="select select-bordered text-neutral"
              value={canWinMultipleTimes}
              onChange={(e) => setCanWinMultipleTimes(e.currentTarget.value)}
            >
              <option disabled selected>
                Select Yes or No
              </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>
        <button
          className="btn btn-warning btn-block"
          disabled={isLoading}
          onClick={handleCreateNewRaffle}
        >
          {isLoading && <span className="loading loading-ring"></span>}
          Create
        </button>
      </div>
    </>
  );
};

export default CreateNewRaffle;
