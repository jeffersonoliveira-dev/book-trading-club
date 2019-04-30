import {REMOVE_BOOK} from './actionTypes';

export const removeBook = payload => ({
  type: REMOVE_BOOK,
  auth: true,
  books: payload,
});
