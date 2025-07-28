const redux = require("redux");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;
// Middleware that allows action creators to return a function instead of an action object (from the action creator).
// This is useful for handling asynchronous operations, such as API calls and dispatching actions based on the results of those operations.

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
// Enables applying middleware to the Redux store.
// Middleware can intercept and modify dispatched actions before they reach the reducer.
// This is useful for logging, crash reporting, performing asynchronous tasks, etc.

// Initial state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Action types
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Action functions to update the state, these functions return action objects that will be dispatched to the store
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => ({ // users is the data fetched from the API
  type: FETCH_USERS_SUCCESS,  
  payload: users, // The users data from the API response is passed as the payload
  // payload is a property in the action object that contains the data to be used in the reducer
  // In this case, it is the array of user IDs fetched from the API
});

const fetchUsersFailure = (error) => ({ // error is the error message from the API response
  type: FETCH_USERS_FAILURE,
  payload: error, // The error message from the API response is passed as the payload
  // payload is a property in the action object that contains the data to be used in the reducer
  // In this case, it is the error message describing why the API call failed
});

// A reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state, // Spread operator to copy the previous state
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload, // Update the users array with the payload from the action, action.payload corresponds to the action property 'payload' in the action creator object
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// Asynchronous function
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest()); // Dispatching the request action to update the state to loading
    axios
      .get("https://jsonplaceholder.typicode.com/users") // Making an API call to fetch users
      .then((response) => {
        // response.data is the array of users
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error description
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware) // Apply middleware to the Redux store
);

// Listening to changes in the store, this will log the state whenever an action is dispatched
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatching the action function to fetch users and update the state
store.dispatch(fetchUsers());
