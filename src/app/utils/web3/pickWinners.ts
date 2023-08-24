import { getRandomNumber } from './utils';

const pickWinners = (numberOfWinners: number, numberOfTickets: number) => {
  const winners: number[] = [];

  if (numberOfTickets >= numberOfWinners) {
    while (winners.length < numberOfWinners) {
      const randomNumber = getRandomNumber(0, numberOfTickets);
      if (!winners.includes(randomNumber)) {
        winners.push(randomNumber);
      }
    }
    return winners;
  }

  while (winners.length < numberOfTickets) {
    const randomNumber = getRandomNumber(0, numberOfTickets);
    if (!winners.includes(randomNumber)) {
      winners.push(randomNumber);
    }
  }

  return winners;
};

export default pickWinners;
