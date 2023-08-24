const calculateProbability = (
  numberOfUserTickets: number,
  numberOfTickets: number,
  numberOfWinners: number
) => {
  if (numberOfWinners === 1) {
    return (
      Math.round((numberOfUserTickets / numberOfTickets) * 100 * 100) / 100
    );
  } else if (numberOfWinners > 1) {
    return (
      Math.round(
        (numberOfUserTickets / numberOfTickets) *
          (1 / numberOfWinners) *
          100 *
          100
      ) / 100
    );
  }

  return 0;
};

const calculateWinningsProbability = (
  numberOfUserTickets: number,
  numberOfTickets: number,
  numberOfWinners: number
) => {
  const probability = calculateProbability(
    numberOfUserTickets,
    numberOfTickets,
    numberOfWinners
  );

  if (numberOfUserTickets === numberOfTickets && numberOfUserTickets !== 0) {
    return 100;
  }

  if (numberOfUserTickets === 0) {
    return 0;
  }

  if (numberOfUserTickets !== numberOfTickets) {
    return probability * numberOfWinners;
  }
};

export default calculateWinningsProbability;

export const calculateWinningsProbabilityMegaJackpot = (
  numberOfUserTickets: number,
  numberOfTickets: number,
  numberOfWinners: number
) => {
  const probability = calculateProbability(
    numberOfUserTickets,
    numberOfTickets,
    numberOfWinners
  );

  if (
    numberOfUserTickets === numberOfTickets &&
    numberOfUserTickets !== 0 &&
    numberOfUserTickets >= numberOfWinners
  ) {
    return 100;
  }

  if (numberOfUserTickets === 0 || numberOfUserTickets < numberOfWinners) {
    return 0;
  }

  if (numberOfUserTickets !== numberOfTickets) {
    return probability;
  }
};
