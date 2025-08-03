// Import action type
import { BUY_COFFEE } from "./coffeeType";

// Create initial state
const initialState = {
  numOfCoffee: 40,
};

// Create reducer function that accepts state and action and returns an updated state
const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_COFFEE:
      return {
        ...state,
        numOfCoffee: state.numOfCoffee - 1,
      };
    default:
      return state;
  }
};

// export the reducer
export default coffeeReducer;
