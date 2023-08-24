import React from 'react';
import H2 from '../../H2';
import { useRhyzeRaffleContractWrite } from '@/app/hooks/web3/useRhyzeRaffle';

const GrantAllowanceSevenUp = () => {
  return (
    <>
      <div className="space-y-8">
        <div>
          <H2>ID: 3</H2>
          <H2>Grant Allowance 7up</H2>
        </div>
        <button className="btn btn-warning btn-block">Approve</button>
      </div>
    </>
  );
};

export default GrantAllowanceSevenUp;
