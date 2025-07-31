import { createStore } from "redux"
import rootReducer from "./rootReducer";

const store = createStore(rootReducer); // Create a Redux store using the combined rootReducer as a parameter

export default store;