import {ADD_USER} from './actionTypes';

export const addUser = payload => ({
  type: ADD_USER,
  auth: true,
  userData: payload.userData,
  userToken: payload.userToken,
  trades: payload.userData.trades,
  books: payload.userData.books,
});
