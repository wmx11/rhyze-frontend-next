import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/ui/components/ui/dialog';
import React, { useEffect, useState } from 'react';
import H2 from '../H2';
import { ConnectWallet, useAddress, useChainId } from '@thirdweb-dev/react';
import { useRhyzeTokenAllowance } from '@/app/hooks/web3/useAllowance';
import { web3config } from '@/app/utils/web3/config';
import { toast } from '@/app/ui/components/ui/use-toast';
import { toBigNumber } from '@/app/utils/web3/utils';
import { DEFAULT_ALLOWANCE } from '@/app/utils/web3/constants';

const EnterRaffleModal = () => {
  const userAddress = useAddress();
  const chainId = useChainId();

  const {
    spender,
    rhyzeTokenAllowance,
    isLoadingRead,
    isLoadingWrite,
    errorWrite,
    approve,
  } = useRhyzeTokenAllowance({
    userAddress,
    spender: web3config.getContractByChainId(chainId)?.rhyzeRaffle.address,
  });

  const [ticketAmount, setTicketAmount] = useState(1);

  useEffect(() => {
    if (errorWrite) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: errorWrite?.toString(),
      });
    }
  }, [errorWrite]);

  const handleOnChange = (value: string) => {
    const number = parseInt(value, 10);

    if (number < 1) {
      setTicketAmount(1);
      return;
    }

    // Set the max amount to the max allowance
    if (number > rhyzeTokenAllowance) {
      setTicketAmount(rhyzeTokenAllowance);
      return;
    }

    setTicketAmount(number);
  };

  const handleBuyTickets = () => {
    console.log(ticketAmount);
  };

  const renderRaffleButtons = () => {
    if (!userAddress) {
      return <ConnectWallet />;
    }

    if (rhyzeTokenAllowance <= 0) {
      return (
        <button
          className="btn btn-primary text-white"
          disabled={isLoadingRead || isLoadingWrite}
          onClick={async () => {
            approve({
              args: [spender, toBigNumber(DEFAULT_ALLOWANCE).toString()],
            });
          }}
        >
          {isLoadingRead || isLoadingWrite ? (
            <span className="loading loading-ring"></span>
          ) : (
            'Approve Contract'
          )}
        </button>
      );
    }

    return (
      <button className="btn btn-primary text-white" onClick={handleBuyTickets}>
        Buy Tickets
      </button>
    );
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="flex justify-center relative">
            <button className="btn btn-primary btn-lg text-white font-bold animate btn-block z-10 relative hover:shadow-[0px_0px_30px_hsl(var(--primary))] shadow-[0px_0px_15px_hsl(var(--primary))]">
              Enter the raffle
            </button>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <H2>Get your raffle tickets!</H2>
            </DialogTitle>
            <DialogDescription>
              <p>
                Do you feel the Rhyze? Catch the raffle wave by buying some
                tickets!
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
                    onChange={(e) => handleOnChange(e.currentTarget.value)}
                    type="number"
                    placeholder="Enter ticket amount here"
                    className="input input-bordered w-full "
                  />
                </div>
                {/* handles button rendering */}
                {renderRaffleButtons()}
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EnterRaffleModal;
