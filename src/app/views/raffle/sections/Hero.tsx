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
import React, { useState } from 'react';

const Hero = () => {
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

  return (
    <section>
      <HeroWrapper className="items-center justify-center">
        <div className="p-10">
          <div className="mb-16 space-y-16 flex flex-col max-w-xl mx-auto text-center">
            <H1 className="animate !text-7xl">Catch the raffle wave!</H1>
            <Dialog>
              <DialogTrigger>
                <button className="btn btn-primary btn-lg text-white font-bold animate">
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
                    </div>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-6">
            <div className="card bg-dark-wet-sand text-white space-y-4 p-6 min-h-[200px] w-full md:max-w-[250px] shadow-md animate">
              <H2>Ticket Price</H2>
              <p>Price of one token is X $RHYZE</p>
            </div>
            <div className="card bg-dark-wet-sand text-white space-y-4 p-6 min-h-[200px] w-full md:max-w-[250px] shadow-md animate">
              <H2>Prize Winnings</H2>
              <p>Stand the chance to win up to X$!</p>
            </div>
            <div className="card bg-dark-wet-sand text-white space-y-4 p-6 min-h-[200px] w-full md:max-w-[250px] shadow-md animate">
              <H2>Last Winnings</H2>
              <p>Stand the chance to win up to X$!</p>
            </div>
            <div className="card bg-dark-wet-sand text-white space-y-4 p-6 min-h-[200px] w-full md:max-w-[250px] shadow-md animate">
              <H2>Mega Jackpot Chance</H2>
              <p>Stand the chance to win up to X$!</p>
            </div>
            <div className="card bg-dark-wet-sand text-white space-y-4 p-6 min-h-[200px] w-full md:max-w-[250px] shadow-md animate">
              <H2>Your Chances</H2>
              <p>Stand the chance to win up to X$!</p>
            </div>
          </div>
        </div>
      </HeroWrapper>
    </section>
  );
};

export default Hero;
