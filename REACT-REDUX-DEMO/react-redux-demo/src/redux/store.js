import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk"; // Middleware to allow async action creators
import logger from "redux-logger"; // Middleware to log actions and state changes
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

// Create Redux store with:
// - rootReducer: combined reducers
// - middleware: logger + thunk
// - DevTools support for debugging
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk)) // composeWithDevTools is used to enhance the store with Redux DevTools support, and logger middleware is applied for logging actions and state changes
);

export default store;
