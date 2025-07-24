const redux = require("redux"); // Import redux library
const reduxLogger = require("redux-logger");

const createStore = redux.createStore; // Import createStore function from redux
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// Define a constant for the action type
const BUY_CAKE = "BUY_CAKE";

// Define an additional constant for an action type
const BUY_ICECREAM = "BUY_ICECREAM";

// Action creator: returns an action object with a 'type' field
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action", // Optional metadata
  };
}

// An additional Action creator: returns an additional action object with a 'type' field
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "First redux action", // Optional metadata
  };
}

/*
  A reducer is a pure function that takes the current state and an action,
  and returns a new state based on the action type.
  It must not mutate the original state:

   (previousState, action) => newState
*/

// Define the initial cake state of the application
const cakeInitialState = {
  numOfCakes: 10,
};

// Define the initial ice cream state of the application
const iceCreamInitialState = {
  numOfIceCreams: 20,
};

// Reducer function (pure function) for handling cake-related actions
const cakeReducer = (state = cakeInitialState, action) => {
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

// Reducer function (pure function) for handling ice cream related actions
const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

// Combine the reducers into a single root reducer
const rootReducer = combineReducers({
  cake: cakeReducer, // Combine cakeReducer under the key 'cake'
  iceCream: iceCreamReducer, // Combine iceCreamReducer under the key 'iceCream'
});

const store = createStore(rootReducer, applyMiddleware(logger)); // Create the Redux store with the rootReducer and applyMiddleware to log actions
// The store is the central hub of the application state, it holds the current state and allows
// dispatching actions to update the state.
// The applyMiddleware function is used to add middleware to the store, in this case, redux-logger for logging actions and state changes.

console.log("Initial state:", store.getState(), "\n"); // Log the initial state, getState() is a method of the store

// At this point you are subscribed – Redux saves this function in the "Subscriptions" list.
// store.subscribe() is a method to listen for state changes, it will be called whenever an action is dispatched
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake()); // Dispatch the buyCake action to update the state and there for also calls store.subscribe()
store.dispatch(buyCake()); // Dispatch another buyCake action to update the state again and there for also calls store.subscribe()
store.dispatch(buyCake()); // Dispatch another buyCake action to update the state again and there for also calls store.subscribe()
console.log(
  "Now lets only sell Ice creams by dispatching the buyIceCream action creator: \n"
);
store.dispatch(buyIceCream()); // Dispatch a buyIceCream action to update the state again and there for also calls store.subscribe()
store.dispatch(buyIceCream()); // Dispatch another buyIceCream action to update the state again and there for also calls store.subscribe()

unsubscribe(); // Unsubscribe from the store to stop listening for state changes
console.log("Unsubscribed from store"); // Log that we have unsubscribed
