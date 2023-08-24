import React from 'react';
import Card, { CardHeader } from '../Card';
import { useRhyzeRaffleContractRead } from '@/app/hooks/web3/useRhyzeRaffle';
import {
  RAFFLE_CURRENT_RAFFLE_ID,
  RAFFLE_GET_PRICE_PER_TICKET,
} from '@/app/utils/web3/constants';

const RaffleUserStats = () => {
  const { data: pricePerTicket, isLoading: isLoadingpricePerTicket } =
    useRhyzeRaffleContractRead({
      method: RAFFLE_GET_PRICE_PER_TICKET,
      args: [RAFFLE_CURRENT_RAFFLE_ID],
    });

  return (
    <>
      <Card className="animate">
        <CardHeader>Ticket Price</CardHeader>
        <p>
          {pricePerTicket ? (
            <span className="loading loading-ring"></span>
          ) : (
            pricePerTicket
          )}
        </p>
      </Card>
      <Card className="animate">
        <CardHeader>Prize Winnings</CardHeader>
        <p>Stand the chance to win up to X$!</p>
      </Card>
      <Card className="animate">
        <CardHeader>Last Winnings</CardHeader>
        <p>Stand the chance to win up to X$!</p>
      </Card>
      <Card className="animate">
        <CardHeader>Mega Jackpot Chance</CardHeader>
        <p>Stand the chance to win up to X$!</p>
      </Card>
      <Card className="animate">
        <CardHeader>Your Chances</CardHeader>
        <p>Stand the chance to win up to X$!</p>
      </Card>
    </>
  );
};

export default RaffleUserStats;
