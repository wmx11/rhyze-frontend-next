import { useRhyzeTokenAllowance } from '@/app/hooks/web3/useAllowance';
import { useRhyzeRaffleContractWrite } from '@/app/hooks/web3/useRhyzeRaffle';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/ui/components/ui/dialog';
import { web3config } from '@/app/utils/web3/config';
import {
  DEFAULT_ALLOWANCE,
  RAFFLE_MINT_TICKETS,
} from '@/app/utils/web3/constants';
import { toBigNumber } from '@/app/utils/web3/utils';
import { ConnectWallet, useAddress, useChainId } from '@thirdweb-dev/react';
import { useState } from 'react';
import H2 from '../H2';

const EnterRaffleModal = () => {
  const userAddress = useAddress();
  const chainId = useChainId();

  const {
    spender,
    rhyzeTokenAllowance,
    isLoadingReadAllowance,
    isLoadingWriteApprove,
    approve,
  } = useRhyzeTokenAllowance({
    userAddress,
    spender: web3config.getContractByChainId(chainId)?.rhyzeRaffle.address,
  });

  const { mutateAsync: mint, isLoading: isLoadingMintTickets } =
    useRhyzeRaffleContractWrite({
      method: RAFFLE_MINT_TICKETS,
    });

  const [ticketAmount, setTicketAmount] = useState(1);

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

  const handleApproveContract = () => {
    approve({
      args: [spender, toBigNumber(DEFAULT_ALLOWANCE).toString()],
    });
  };

  const handleMintTickets = () => {
    mint({
      args: [ticketAmount.toString()],
    });
  };

  const renderRaffleButtons = () => {
    if (!userAddress) {
      return <ConnectWallet />;
    }

    if (rhyzeTokenAllowance <= 0) {
      return (
        <button
          className="btn btn-primary text-white"
          disabled={isLoadingReadAllowance || isLoadingWriteApprove}
          onClick={handleApproveContract}
        >
          {isLoadingReadAllowance ||
            (isLoadingWriteApprove && (
              <span className="loading loading-ring"></span>
            ))}
          Approve Contract
        </button>
      );
    }

    return (
      <button
        className="btn btn-primary text-white"
        disabled={isLoadingMintTickets}
        onClick={handleMintTickets}
      >
        {isLoadingMintTickets && <span className="loading loading-ring"></span>}
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
                    disabled={rhyzeTokenAllowance <= 0}
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
