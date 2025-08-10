// Import action type
import { BUY_SODA } from "./sodaTypes";

// Create initial state
const initialState = {
  numOfSodas: 30,
};

// Create reducer - a function that accepts initial state and an action and returns a new state
const sodaReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SODA:
      return {
        ...state,
        numOfSodas: state.numOfSodas - action.payload,
      };
    default:
      return state;
  }
};

export default sodaReducer;
