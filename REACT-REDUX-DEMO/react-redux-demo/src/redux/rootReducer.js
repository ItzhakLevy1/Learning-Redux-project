// Combine all reducers into a single reducer that could be passed to the createStore function

import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./iceCream/iceCreamReducer";
import sodaReducer from "./soda/sodaReducer";
import coffeeReducer from "./coffee/coffeeReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  soda: sodaReducer,
  coffee: coffeeReducer,
});

export default rootReducer;
