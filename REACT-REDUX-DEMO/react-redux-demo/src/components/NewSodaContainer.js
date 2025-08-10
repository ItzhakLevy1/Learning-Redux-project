import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buySoda } from "../redux";

const HookSodaContainr = () => {
  const [numberOfSodas, setNumberOfSodas] = useState(1); // State to hold the number of sodas to buy

  const numOfSodas = useSelector((state) => state.soda.numOfSodas); // useSelector is used to access the Redux store state.

  const dispatch = useDispatch(); // useDispatch is used to dispatch actions to the Redux store.

  return (
    <div>
      <h2>Numb Of Sodas From HookSodaContainr {numOfSodas}</h2>
      <input
        type="text"
        value={numberOfSodas}   // Input field to set the number of sodas to buy
        onChange={(e) => setNumberOfSodas(e.target.value)}  // Update the state when input changes
      />
      <button onClick={() => dispatch(buySoda(numberOfSodas))}>  {/* Dispatch the buySoda action with the number of sodas */}
        Buy Sodas
      </button>
    </div>
  );
};

export default HookSodaContainr;
