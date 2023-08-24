import React, { FC } from 'react';

type EndRaffleManuallyProps = {
  numberOfWinners: number;
  setNumberOfWinners: (number: number) => void;
  numberOfTickets: number;
  setNumberOfTickets: (number: number) => void;
};

const EndRaffleManually: FC<EndRaffleManuallyProps> = ({
  numberOfWinners,
  setNumberOfWinners,
  numberOfTickets,
  setNumberOfTickets,
}) => {
  return (
    <>
      <div className="mb-4">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Number of winners</span>
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
            <span className="label-text">Number of tickets</span>
          </label>
          <input
            type="number"
            placeholder="Enter number of tickets"
            className="input input-bordered w-full text-neutral"
            value={numberOfTickets}
            onChange={(e) =>
              setNumberOfTickets(parseInt(e.currentTarget.value, 10))
            }
          />
        </div>
      </div>
    </>
  );
};

export default EndRaffleManually;
