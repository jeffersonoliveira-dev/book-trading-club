import {ADD_BOOK} from './actionTypes';

export const addBook = payload => ({
  type: ADD_BOOK,
  book: payload,
});
