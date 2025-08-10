import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buySoda } from "../redux";

const HookSodaContainr = () => {
  const [numberOfSodas, setNumberOfSodas] = useState(1);
  const numOfSodas = useSelector((state) => state.soda.numOfSodas);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Numb Of Sodas From HookSodaContainr {numOfSodas}</h2>
      <input
        type="text"
        value={numberOfSodas}
        onChange={(e) => setNumberOfSodas(e.target.value)}
      />
      <button onClick={() => dispatch(buySoda(numberOfSodas))}>
        Buy Sodas
      </button>
    </div>
  );
};

export default HookSodaContainr;
