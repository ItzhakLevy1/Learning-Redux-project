// Import type
import { BUY_ICECREAM } from "./iceCreamType";

// Initial state
const initialState = {
  numOfIcecreams: 20,
};

// Reducer
const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
      return state;
  }
};

export default icecreamReducer;