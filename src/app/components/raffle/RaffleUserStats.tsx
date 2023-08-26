import React from 'react';
import Card, { CardHeader } from '../Card';
import { useRhyzeRaffleContractRead } from '@/app/hooks/web3/useRhyzeRaffle';
import {
  BALANCE_OF,
  RAFFLE_CURRENT_RAFFLE_ID,
  RAFFLE_GET_NUMBER_OF_ENTRIES,
  RAFFLE_GET_NUMBER_OF_WINNERS,
  RAFFLE_GET_PRICE_PER_TICKET,
  RAFFLE_GET_WINNERS_PAYOUTS,
} from '@/app/utils/web3/constants';
import Loading from '../Loading';
import calculateWinningsProbability, {
  calculateWinningsProbabilityMegaJackpot,
} from '@/app/utils/web3/calculateWinningsProbability';
import { useAddress } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import toCurrency from '@/app/utils/toCurrency';

const RaffleUserStats = () => {
  const userAddress = useAddress();

  const { data: pricePerTicket } = useRhyzeRaffleContractRead({
    method: RAFFLE_GET_PRICE_PER_TICKET,
    args: [RAFFLE_CURRENT_RAFFLE_ID],
  });

  const { data: numberOfUserTickets } = useRhyzeRaffleContractRead({
    method: BALANCE_OF,
    args: [userAddress || ''],
  });

  const { data: numberOfWinners } = useRhyzeRaffleContractRead({
    method: RAFFLE_GET_NUMBER_OF_WINNERS,
    args: [RAFFLE_CURRENT_RAFFLE_ID],
  });

  const { data: numberOfTickets } = useRhyzeRaffleContractRead({
    method: RAFFLE_GET_NUMBER_OF_ENTRIES,
    args: [RAFFLE_CURRENT_RAFFLE_ID],
  });

  const { data: lastWinnings } = useRhyzeRaffleContractRead({
    method: RAFFLE_GET_WINNERS_PAYOUTS,
    args: [RAFFLE_CURRENT_RAFFLE_ID],
  });

  const calculateLastWinnings = () => {
    if (!lastWinnings || !Array.isArray(lastWinnings)) {
      return 0;
    }

    const transformedValuesArray =
      lastWinnings.map((bigNumber) =>
        parseFloat(ethers.utils.formatUnits(bigNumber || 0))
      ) || [];

    transformedValuesArray.sort((a, b) => b - a);

    return transformedValuesArray.at(0) || 0;
  };

  return (
    <>
      <Card className="animate">
        <CardHeader>Ticket Price</CardHeader>
        <p>{pricePerTicket ? <Loading /> : pricePerTicket}</p>
      </Card>
      <Card className="animate">
        <CardHeader>Last Winnings</CardHeader>
        <p>{toCurrency(calculateLastWinnings())}</p>
      </Card>
      <Card className="animate">
        <CardHeader>Mega Jackpot Chance</CardHeader>
        <p>
          Your chances to win the Mega Jackpot are{' '}
          <strong>
            {calculateWinningsProbabilityMegaJackpot(
              parseInt(ethers.utils.formatUnits(numberOfUserTickets || 0), 10),
              parseInt(ethers.utils.formatUnits(numberOfTickets || 0), 10),
              parseInt(ethers.utils.formatUnits(numberOfWinners || 0), 10)
            )}
            %
          </strong>
        </p>
      </Card>
      <Card className="animate">
        <CardHeader>Your Chances</CardHeader>
        <p>
          You have a{' '}
          <strong>
            {calculateWinningsProbability(
              parseInt(ethers.utils.formatUnits(numberOfUserTickets || 0), 10),
              parseInt(ethers.utils.formatUnits(numberOfTickets || 0), 10),
              parseInt(ethers.utils.formatUnits(numberOfWinners || 0), 10)
            )}
            %
          </strong>{' '}
          chance to win 1 prize!
        </p>
      </Card>
    </>
  );
};

export default RaffleUserStats;
