import React from 'react';
import Card, { CardHeader } from '../Card';

const RaffleUserStats = () => {
  return (
    <>
      <Card className="animate">
        <CardHeader>Ticket Price</CardHeader>
        <p>$0.01</p>
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
