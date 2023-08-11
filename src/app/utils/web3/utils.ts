import { BigNumber } from 'ethers';
import { DECIMALS } from './constants';

export const BIG_DECIMALS = BigNumber.from(10).pow(DECIMALS);

export const toBigNumber = (number: number, decimalPlaces?: number) =>
  BigNumber.from(number)
    .mul(BIG_DECIMALS)
    .div(decimalPlaces || 1)
    .toString();

export const fromBigNumberToSafeNumber = (bigNumber: BigNumber) =>
  bigNumber ? bigNumber.div(BIG_DECIMALS).toNumber() : 0;
