import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(logger)); // Create a Redux store using the combined rootReducer as a parameter

export default store;