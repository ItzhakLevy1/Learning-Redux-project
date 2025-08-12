// userActions.js
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

// Action creator: dispatched before starting API request
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

// Action creator: dispatched when users are successfully fetched
export const fetchUsersSuccess = (users) => {
  // "users" is the list of fetched user objects
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

// Action creator: dispatched when API call fails
export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error, // The payload contains the error message
  };
};
