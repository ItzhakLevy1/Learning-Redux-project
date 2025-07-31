// Combine all reducers into a single reducer that could be passed to the createStore function

import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./iceCream/iceCreamReducer";


const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

export default rootReducer;
