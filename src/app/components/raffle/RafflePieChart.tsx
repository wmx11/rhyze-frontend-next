import {
  ArcElement,
  ChartData,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import React from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const RafflePieChart = () => {
  const chartData: ChartData<'pie'> = {
    datasets: [
      {
        label: 'Prize Winning',
        data: [1, 1, 1, 1],
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
