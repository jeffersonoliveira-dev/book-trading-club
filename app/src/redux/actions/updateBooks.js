import {UPDATE_BOOKS} from './actionTypes';

export const updateBooks = payload => ({
  type: UPDATE_BOOKS,
  books: payload,
});
