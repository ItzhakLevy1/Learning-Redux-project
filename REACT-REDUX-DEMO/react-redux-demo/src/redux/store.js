import { createStore } from "redux"
import cakeReducer from "./cake/cakeReducer"

const store = createStore(cakeReducer); // Create a Redux store using the cakeReducer as a parameter

export default store;