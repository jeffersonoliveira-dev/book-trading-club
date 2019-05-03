import {UPDATE_ALL_BOOKS} from './actionTypes';

export const updateAllBooks = payload => ({
  type: UPDATE_ALL_BOOKS,
  allBooks: payload,
});
