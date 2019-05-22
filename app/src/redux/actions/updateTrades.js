import {UPDATE_TRADES} from './actionTypes';

export const updateTrades = payload => ({
  type: UPDATE_TRADES,
  trades: payload.trades,
});
