import { BUY_CAKE } from "./cakeTypes";

// Initial state
const initialState = {
  numOfCakes: 10,
};

// Create a reducer - a function that accepts a state and and action and returns the new state

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {    // The switch expresion is the action type
    case BUY_CAKE:
      return {
        ...state,   // Maintain the current state
        numOfCakes: state.numOfCakes - 1,   // Decrease the number of cakes by 1 
      };
    default: return state;  // If no action matches, return the current state
  }
};

export default cakeReducer;