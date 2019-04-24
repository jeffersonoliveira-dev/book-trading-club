import {ADD_USER} from './actionTypes';

export const addUser = payload => ({
  type: ADD_USER,
  user: payload,
});
