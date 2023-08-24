// GENERAL CONSTANTS
export const DECIMALS = 18;
export const DEFAULT_ALLOWANCE = 10000000000;

export const APPROVE = 'approve';
export const ALLOWANCE = 'allowance';
export const BALANCE_OF = 'balanceOf';

// RAFFLE CONSTANTS
// --- Routines and setters ---
export const RAFFLE_MINT_TICKETS = 'mint';
export const RAFFLE_END_RAFFLE = 'endRaffle';
export const RAFFLE_SALE_SLATE = 'flipSaleState';
export const RAFFLE_CREATE_NEW_RAFFLE = 'createNewRaffle';
export const RAFFLE_SET_PRIZE_GRADIENT = 'setPrizeGradient';
export const RAFFLE_PRIZE_GRADIENT_CLEAR = 'setPrizesEqual';
export const RAFFLE_SET_RECYCLE_POT_PERCENTAGE = 'setRecyclePotPercentage';

// --- Getters ---
// RAFFLE_ID = 0 refers to the currently ongoing raffle
export const RAFFLE_CURRENT_RAFFLE_ID = 0;
export const RAFFLE_GET_PRICE_PER_TICKET = 'getPricePerTicket';
export const RAFFLE_GET_NUMBER_OF_WINNERS = 'getNumberWinners';
export const RAFFLE_GET_NUMBER_OF_ENTRIES = 'getNumberEntries';
export const RAFFLE_GET_WINNERS_PAYOUTS = 'getWinnersPayouts';
