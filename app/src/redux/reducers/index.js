// import {} from '../actions/actionTypes'
import {ADD_USER} from '../actions/actionTypes';
import {UPDATE_BOOKS} from '../actions/actionTypes';
import {UPDATE_ALL_BOOKS} from '../actions/actionTypes';

const initialState = {
  auth: false,
  notification: [],
  trades: [],
  userData: '',
  userToken: '',
  books: [],
  allBooks: [],
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
    case UPDATE_BOOKS:
      return {
        ...state,
        books: [...action.books],
      };
    case UPDATE_ALL_BOOKS:
      return {
        ...state,
        allBooks: action.allBooks,
      };
    default:
      return state;
  }
};

export default rootReducer;
