import { BUY_SODA } from "./sodaTypes";

// Action creator function
export const buySoda = (numOfSodas = 1) => {  // Set a default value so that the existing functionality in NewSodaContainer doesn't break, since the logic there reduces the amount by one
  // This function returns an action object that will be dispatched to the reducer
  return {
    type: BUY_SODA, // The action type to be dispatched
    payload: numOfSodas,  // Send this additional information to the reducer
  };
};
