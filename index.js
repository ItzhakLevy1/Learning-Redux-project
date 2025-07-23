// Define a constant for the action type
const BUY_CAKE = "BUY_CAKE";

// Action creator: returns an action object with a 'type' field
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action", // Optional metadata
  };
}

/*
  A reducer is a pure function that takes the current state and an action,
  and returns a new state based on the action type.
  It must not mutate the original state:

   (previousState, action) => newState
*/

// Define the initial state of the application
const initialState = {
  numOfCakes: 10,
};

// Reducer function (pure function) for handling cake-related actions
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // Copy the previous state
        numOfCakes: state.numOfCakes - 1, // Update the relevant property
      };

    default:
      return state; // Return unchanged state for unknown action types
  }
};
