import { BUY_SODA } from "./sodaTypes";

// Action creator function
export const buySoda = (numOfSodas = 1) => {
  return {
    type: BUY_SODA,
    payload: numOfSodas,
  };
};
