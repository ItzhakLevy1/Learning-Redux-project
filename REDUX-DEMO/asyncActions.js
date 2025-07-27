const redux = require("redux"); // Import redux library
const createStore = redux.createStore; // Import createStore function from redux

// Create an initial state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Constants action types
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCSS = "FETCH_USERS_SUCCSS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Action creators functions using the action types
const fetchUsersRequest = () => {
  return {  // Create and return an action object
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {  // users is the data fetched from the API
  return {
    type: FETCH_USERS_SUCCSS,
    payload: users, // The users data from the API response
  };
};

const fetchUsersFailure = (error) => {  // error is the error message from the API response
  return {
    type: FETCH_USERS_FAILURE,
    payload: error, // The error message from the API response
  };
};

// A reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,   // Spread operator to copy the previous state
        loading: true,
      };
    case FETCH_USERS_SUCCSS:
      return {
        ...state,
        loading: false,
        users: action.payload,  // Update the users array with the payload from the action, action.payload corresponds to the action property 'payload' in the action creator object
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

// Create a store implementing the reducer
const store = createStore(reducer);
