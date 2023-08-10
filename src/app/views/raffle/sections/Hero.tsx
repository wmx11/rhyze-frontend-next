import H1 from '@/app/components/H1';
import H2 from '@/app/components/H2';
import HeroWrapper from '@/app/components/HeroWrapper';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/ui/components/ui/dialog';
import { useState } from 'react';

import {
  ArcElement,
  ChartData,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Cocktail from '../../../../../public/assets/cocktail.png';
import Cocktail2 from '../../../../../public/assets/coconut_drink.png';
import Sunlounger from '../../../../../public/assets/sunlounger.png';

import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import Image from 'next/image';
import Card, { CardHeader } from '@/app/components/Card';

ChartJS.register(ArcElement, Tooltip, Legend);

const Hero = () => {
  const address = useAddress();

  const [ticketAmount, setTicketAmount] = useState(1);

  const handleOnChange = (value: string) => {
    const number = parseInt(value, 10);

    if (number < 1) {
      setTicketAmount(1);
      return;
    }

    setTicketAmount(number);
  };

  const handleBuyTickets = () => {
    console.log(ticketAmount);
  };

  const handleAddAllowance = () => {
    console.log(ticketAmount);
  };

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
    <section>
      <HeroWrapper className="items-center justify-center relative pb-24">
        <div className="p-10 relative">
          <div className="mb-16 space-y-16 flex flex-col max-w-xl mx-auto text-center">
            <H1 className="animate !text-7xl z-10 relative">
              Catch the raffle wave!
            </H1>
            <Dialog>
              <DialogTrigger>
                <button className="btn btn-primary btn-lg text-white font-bold animate btn-block z-10 relative">
                  Enter the raffle
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <H2>Get your raffle tickets!</H2>
                  </DialogTitle>
                  <DialogDescription>
                    <p>
                      Do you feel the Rhyze? Catch the raffle wave by buying
                      some tickets!
                    </p>
                  </DialogDescription>
                  <div>
                    <div className="flex flex-col space-y-4">
                      <div className="form-control w-full ">
                        <label className="label">
                          <span className="label-text">
                            How many tickets do you want to buy?
                          </span>
                        </label>
                        <input
                          value={ticketAmount}
                          onChange={(e) =>
                            handleOnChange(e.currentTarget.value)
                          }
                          type="number"
                          placeholder="Enter ticket amount here"
                          className="input input-bordered w-full "
                        />
                      </div>
                      {address ? (
                        <>
                          <button
                            className="btn btn-primary text-white"
                            onClick={handleBuyTickets}
                          >
                            Buy Tickets
                          </button>
                          <button
                            className="btn btn-accent text-white"
                            onClick={handleAddAllowance}
                          >
                            Add Allowance
                          </button>
                        </>
                      ) : (
                        <ConnectWallet className="connect-wallet" />
                      )}
                    </div>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <div className="absolute top-0 left-0 animate float max-w-[120px] md:max-w-full">
              <Image
                src={Cocktail}
                alt="Rhyze Cocktail"
                width={180}
                className="opacity-50 md:opacity-100"
              />
            </div>
            <div className="absolute top-0 right-0 animate float max-w-[120px] md:max-w-full">
              <Image
                src={Cocktail2}
                alt="Rhyze Cocktail"
                width={150}
                className="opacity-50 md:opacity-100"
              />
            </div>
          </div>
          <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>Ticket Price</CardHeader>
              <p>$0.01</p>
            </Card>
            <Card>
              <CardHeader>Prize Winnings</CardHeader>
              <p>Stand the chance to win up to X$!</p>
            </Card>
            <Card>
              <CardHeader>Last Winnings</CardHeader>
              <p>Stand the chance to win up to X$!</p>
            </Card>
            <Card>
              <CardHeader>Mega Jackpot Chance</CardHeader>
              <p>Stand the chance to win up to X$!</p>
            </Card>
            <Card>
              <CardHeader>Your Chances</CardHeader>
              <p>Stand the chance to win up to X$!</p>
            </Card>
          </div>
          <div className="flex items-center justify-center py-10 text-center">
            <div className="space-y-8">
              <H1 className="animate !text-7xl z-10 relative">Raffle stats</H1>
              <div className="max-w-[300px] mx-auto float">
                <Pie data={chartData} />
              </div>
            </div>
          </div>
          <div className="md:block absolute bottom-[0] right-0 md:right-[-100px] z-[1] opacity-80 max-w-[120px] md:max-w-full">
            <Image src={Sunlounger} alt="Palm tree" width={250} />
          </div>
          <div className="md:block absolute bottom-[0] left-0 md:left-[-100px] scale-x-[-1] z-[1] opacity-80 max-w-[120px] md:max-w-full">
            <Image src={Sunlounger} alt="Palm tree" width={250} />
          </div>
        </div>
      </HeroWrapper>
    </section>
  );
};

export default Hero;
