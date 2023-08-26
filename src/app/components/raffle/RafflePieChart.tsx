import {
  ArcElement,
  ChartData,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import React from 'react';
import { useRhyzeRaffleContractRead } from '@/app/hooks/web3/useRhyzeRaffle';
import {
  RAFFLE_CURRENT_RAFFLE_ID,
  RAFFLE_GET_NUMBER_OF_WINNERS,
  RAFFLE_GET_POT_FUNDS,
  RAFFLE_GET_PRIZE_GRADIENT,
  RHYZE_GET_PRICE,
} from '@/app/utils/web3/constants';
import { useRhyzeTokenContractRead } from '@/app/hooks/web3/useRhyzeToken';
import { ethers } from 'ethers';

ChartJS.register(ArcElement, Tooltip, Legend);

const RafflePieChart = () => {
  const { data: numberOfWinners } = useRhyzeRaffleContractRead({
    method: RAFFLE_GET_NUMBER_OF_WINNERS,
    args: [RAFFLE_CURRENT_RAFFLE_ID],
  });

  const { data: prizeGradient } = useRhyzeRaffleContractRead({
    method: RAFFLE_GET_PRIZE_GRADIENT,
    args: [RAFFLE_CURRENT_RAFFLE_ID],
  });

  const { data: potFunds } = useRhyzeRaffleContractRead({
    method: RAFFLE_GET_POT_FUNDS,
    args: [RAFFLE_CURRENT_RAFFLE_ID],
  });

  const { data: rhyzePrice } = useRhyzeTokenContractRead({
    method: RHYZE_GET_PRICE,
  });

  const getWinningValue = (gradientStatus: number, divideAmount: number) => {
    const formattedPotFunds = parseFloat(
      ethers.utils.formatUnits(potFunds || 0)
    );

    if (!gradientStatus) {
      return formattedPotFunds / 2 / divideAmount;
    }

    return (gradientStatus / 100) * (formattedPotFunds / 2);
  };

  const buildChartDataSet = () => {
    const formattedRhyzePrice = parseFloat(
      ethers.utils.formatUnits(rhyzePrice || 0)
    );

    const formattedNumberOfWinners = parseInt(
      ethers.utils.formatUnits(numberOfWinners || 0),
      10
    );

    const data = [];

    if (prizeGradient?.length === 0) {
      while (data.length < formattedNumberOfWinners) {
        const prizeValue = Math.round(
          getWinningValue(0, formattedNumberOfWinners) * formattedRhyzePrice
        );

        if (prizeValue > 0) {
          data.push(prizeValue);
        } else {
          data.push(1);
        }
      }
    } else {
      let i = 0;

      while (data.length < prizeGradient?.length) {
        const prizeGradientAtIndex = parseFloat(
          ethers.utils.formatUnits(prizeGradient[i])
        );

        const prizeValue =
          getWinningValue(prizeGradientAtIndex, 0) * formattedRhyzePrice;

        if (prizeValue > 0) {
          data.push(prizeValue);
        } else {
          data.push(prizeGradientAtIndex);
        }

        i += 1;
      }
    }

    return data;
  };

  const chartData: ChartData<'pie'> = {
    datasets: [
      {
        label: 'Prize Winning',
        data: buildChartDataSet(),
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
  };

  return (
    <>
      <Pie data={chartData} />
    </>
  );
};

export default RafflePieChart;
