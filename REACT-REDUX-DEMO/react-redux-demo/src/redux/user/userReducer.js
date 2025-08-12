// Imports action types
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

// Initial Redux state for user data
const initialState = {
  loading: false, // Whether data is being loaded
  users: [], // Array to store fetched users
  error: "", // String for error message
};

// Reducer function for handling user actions
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      // API request started — set loading true
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      // API request succeeded — store users and clear error
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      // API request failed — clear users, store error
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state; // Return unchanged state for unknown actions
  }
};

export default userReducer;
