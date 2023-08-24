import {
  useRhyzeRaffleContractRead,
  useRhyzeRaffleContractWrite,
} from '@/app/hooks/web3/useRhyzeRaffle';
import {
  RAFFLE_CURRENT_RAFFLE_ID,
  RAFFLE_END_RAFFLE,
  RAFFLE_GET_NUMBER_OF_ENTRIES,
  RAFFLE_GET_NUMBER_OF_WINNERS,
} from '@/app/utils/web3/constants';
import pickWinners from '@/app/utils/web3/pickWinners';
import React, { useState } from 'react';
import EndRaffleManually from './EndRaffleManually';
import { fromBigNumberToSafeNumber } from '@/app/utils/web3/utils';
import ErrorMessage from '@/app/components/ErrorMessage';

const EndRaffle = () => {
  const [isAutomated, setIsAutomated] = useState(false);
  const [error, setError] = useState('');
  const [numberOfWinners, setNumberOfWinners] = useState(0);
  const [numberOfTickets, setNumberOfTickets] = useState(0);

  const { mutateAsync, isLoading } = useRhyzeRaffleContractWrite({
    method: RAFFLE_END_RAFFLE,
  });

  const {
    data: numberOfWinnersFromContract,
    isLoading: isLoadingNumberOfWinners,
  } = useRhyzeRaffleContractRead({
    method: RAFFLE_GET_NUMBER_OF_WINNERS,
  });

  const {
    data: numberOfTicketsFromContract,
    isLoading: isLoadingNumberOfTickets,
  } = useRhyzeRaffleContractRead({
    method: RAFFLE_GET_NUMBER_OF_ENTRIES,
    args: [RAFFLE_CURRENT_RAFFLE_ID],
  });

  /**
   * @params - uint256[] array of winners
   */
  const handleEndRaffle = () => {
    if (isAutomated) {
      const arrayOfWinners = pickWinners(
        fromBigNumberToSafeNumber(numberOfWinnersFromContract),
        fromBigNumberToSafeNumber(numberOfTicketsFromContract)
      );

      if (arrayOfWinners.length < 1) {
        setError('There are no winners (calculated using contract data)');
      } else {
        setError('');
      }

      mutateAsync({ args: [[arrayOfWinners]] });
      return;
    }

    const arrayOfWinners = pickWinners(numberOfWinners, numberOfTickets);

    if (arrayOfWinners.length < 1) {
      setError('No winners were picked according to your input data');
    } else {
      setError('');
    }

    mutateAsync({ args: [[arrayOfWinners]] });
  };

  return (
    <>
      <div>
        {/* Allows to select automate or manual calculations */}
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">End raffle automatically</span>
            <input
              type="checkbox"
              className="toggle"
              checked={isAutomated}
              onChange={() => setIsAutomated(!isAutomated)}
            />
          </label>
        </div>

        {/* Render out any errors */}
        <ErrorMessage error={error} />

        {/* Render out automated or manual sections */}
        {isAutomated ? (
          <>
            <p className="mb-4">Winners will be picked automatically</p>
          </>
        ) : (
          <EndRaffleManually
            numberOfTickets={numberOfTickets}
            setNumberOfTickets={setNumberOfTickets}
            numberOfWinners={numberOfWinners}
            setNumberOfWinners={setNumberOfWinners}
          />
        )}
        <button
          className="btn btn-warning btn-block"
          disabled={isLoading}
          onClick={handleEndRaffle}
        >
          {isLoading && <span className="loading loading-ring"></span>}
          End Raffle
        </button>
      </div>
    </>
  );
};

export default EndRaffle;
