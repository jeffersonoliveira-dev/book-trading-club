// import {} from '../actions/actionTypes'
import {ADD_USER} from '../actions/actionTypes';
import {ADD_BOOK} from '../actions/actionTypes';
import {REMOVE_BOOK} from '../actions/actionTypes';

const initialState = {
  auth: false,
  notification: [],
  trades: [],
  userData: '',
  userToken: '',
  books: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        auth: action.auth,
        trades: action.trades,
        books: action.books,
        userData: action.userData,
        userToken: action.userToken,
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.book],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: [...action.books],
      };
    default:
      return state;
  }
};

export default rootReducer;
