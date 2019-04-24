// import {} from '../actions/actionTypes'
import {ADD_USER} from '../actions/actionTypes';

const initialState = {
  auth: false,
  notification: [],
  trades: [],
  user: '',
};

const rootReducer = (state = initialState, action) => {
  // action switch here
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        auth: true,
        trades: action.trades,
        user: action.user,
      };
    default:
      return state;
  }
};

export default rootReducer;
