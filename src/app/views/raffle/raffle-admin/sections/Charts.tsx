'use client';

import Container from '@/app/components/Container';
import H1 from '@/app/components/H1';
import Section from '@/app/components/Section';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  Colors,
  ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Card from '@/app/components/Card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors
);

ChartJS.defaults.borderColor = '#ffffff20';
ChartJS.defaults.color = '#fff';

const Charts = () => {
  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    backgroundColor: '#1E5EC0',
    borderColor: '#1E5EC0',
  };

  const highestPayoutsData: ChartData<'line'> = {
    labels: [1, 2, 3, 4],
    datasets: [
      {
        label: 'Highest Payouts (per $1k of each raffle)',
        data: [1, 2, 3, 4],
      },
    ],
  };

  const ticketPricesVSTicketSalesData: ChartData<'line'> = {
    labels: [1, 2, 3, 4],
    datasets: [
      {
        label: 'Ticket Prices ($) vs. Total Sales (per $1k)',
        data: [1, 2, 3, 4],
      },
    ],
  };

  const numberOfParticipantsData: ChartData<'line'> = {
    labels: [1, 2, 3, 4],
    datasets: [
      {
        label: 'Number of participants',
        data: [1, 2, 3, 4],
      },
    ],
  };

  return (
    <Section>
      <Container>
        <H1 className="text-center mb-16">Raffle Charts</H1>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <Line data={highestPayoutsData} options={chartOptions} />
          </Card>
          <Card>
            <Line data={ticketPricesVSTicketSalesData} options={chartOptions} />
          </Card>
          <Card>
            <Line data={numberOfParticipantsData} options={chartOptions} />
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default Charts;
