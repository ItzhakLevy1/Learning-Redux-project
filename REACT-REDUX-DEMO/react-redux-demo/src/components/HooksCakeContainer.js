import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  // useSelector is a React-Redux hook that allows you to extract data from the Redux store state.
  // It takes a function that receives the entire Redux state and returns the part of the state you want.
  // In this case, we are selecting the "numOfCakes" value from the state and storing it inside of the numOfCakes variable.
  // It replaces mapStateToProps from the connect approach and the need to use props.
  const numOfCakes = useSelector(state => state.cake.numOfCakes);

  // useDispatch returns a reference to the dispatch function from the Redux store.
  // We use this to dispatch an action when the button is clicked.
  // It replaces mapDispatchToProps from the connect approach.
  // We can call dispatch with the action creator function directly.
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of cakes {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
