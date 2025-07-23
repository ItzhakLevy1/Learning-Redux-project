const redux = require("redux"); // Import redux library
const createStore = redux.createStore; // Import createStore function from redux

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

const store = createStore(reducer); // Create a store with the reducer

console.log("Initial state:", store.getState()); // Log the initial state, getState() is a method of the store

// At this point you are subscribed – Redux saves this function in the "Subscriptions" list.
// store.subscribe() is a method to listen for state changes, it will be called whenever an action is dispatched
const unsubscribe = store.subscribe(() => {
  console.log("Updated state:", store.getState());
});

store.dispatch(buyCake()); // Dispatch the buyCake action to update the state and there for also calls store.subscribe()
store.dispatch(buyCake()); // Dispatch another buyCake action to update the state again and there for also calls store.subscribe()
store.dispatch(buyCake()); // Dispatch another buyCake action to update the state again and there for also calls store.subscribe()
unsubscribe(); // Unsubscribe from the store to stop listening for state changes
console.log("Unsubscribed from store"); // Log that we have unsubscribed
