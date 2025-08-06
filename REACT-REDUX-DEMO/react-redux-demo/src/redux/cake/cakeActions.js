import { BUY_CAKE } from "./cakeTypes";

// Action creator function
// Set a default value so that the existing functionality in CakeContainer and in HooksCakeContainer doesnt break, since the logic there reduces the amount by one
export const buyCake = (numOfCakes = 1) => {
  return {
    type: BUY_CAKE,
    payload: numOfCakes, // Send this additional information to the reducer
  };
};
