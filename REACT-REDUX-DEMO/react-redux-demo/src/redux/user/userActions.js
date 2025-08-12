import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

// Action creator: dispatched before starting API request (sets loading to true)
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

// Action creator: dispatched when users are successfully fetched
export const fetchUsersSuccess = (users) => {
  // "users" is the list of fetched user objects from the API
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users, // Store the fetched users in Redux state
  };
};

// Action creator: dispatched when API call fails
export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error, // Store the error message in Redux state
  };
};

// Thunk action creator (enabled by redux-thunk middleware):
// Returns a function instead of a plain object — this function performs async work
export const fetchUsers = () => {
  return (dispatch) => {
    // Dispatch request action — triggers loading state
    dispatch(fetchUsersRequest()); // This will set loading to true
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // On success → dispatch success action with users list
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // On error → dispatch failure action with error message
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
