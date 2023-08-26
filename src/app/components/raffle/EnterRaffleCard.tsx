import { useRhyzeTokenAllowance } from '@/app/hooks/web3/useAllowance';
import { useRhyzeRaffleContractWrite } from '@/app/hooks/web3/useRhyzeRaffle';
import { web3config } from '@/app/utils/web3/config';
import {
  CHAIN_ID_POLYGON,
  DEFAULT_ALLOWANCE,
  RAFFLE_MINT_TICKETS,
} from '@/app/utils/web3/constants';
import { ConnectWallet, useAddress, useChainId } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { useState } from 'react';
import Card from '../Card';

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
      args: [
        spender,
        ethers.utils.parseUnits(DEFAULT_ALLOWANCE.toString()).toString(),
      ],
    });
  };

  const handleMintTickets = () => {
    mint({
      args: [ticketAmount.toString()],
    });
  };

  const renderRaffleButtons = () => {
    if (chainId !== CHAIN_ID_POLYGON) {
      return <p className="font-bold">Make sure you are on Polygon network</p>;
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

  if (!userAddress) {
    return <ConnectWallet />;
  }

  return (
    <>
      <Card>
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
      </Card>
    </>
  );
};

export default EnterRaffleModal;
