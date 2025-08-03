import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

// Create a Redux store using the combined rootReducer as a parameter
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger)) // composeWithDevTools is used to enhance the store with Redux DevTools support, and logger middleware is applied for logging actions and state changes
);

export default store;
