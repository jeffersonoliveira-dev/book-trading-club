import {ADD_USER} from './actionTypes';

export const addUser = payload => ({
  type: ADD_USER,
  userData: payload.userData,
  userToken: payload.userToken,
});
