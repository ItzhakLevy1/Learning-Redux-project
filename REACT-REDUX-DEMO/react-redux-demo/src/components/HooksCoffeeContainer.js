import { useSelector, useDispatch } from "react-redux";
import { buyCoffee } from "../redux";

const HooksCoffeeContainer = () => {
  // useSelector is a React-Redux hook that allows you to extract data from the Redux store state.
  // It takes a function that receives the entire Redux state and returns the part of the state you want.
  // In this case, we are selecting the "numOfCoffee" value from the state and storing it inside of the numOfCoffee variable.
  // It replaces mapStateToProps from the connect approach and the need to use props.

  const numOfCoffee = useSelector((state) => state.coffee.numOfCoffee); // Extracting numOfCoffee from the Redux state
  const dispatch = useDispatch(); // Getting the dispatch function to send actions to the Redux store

  return (
    <div>
      {/* Displaying the number of coffee from the Redux state */}
      <h2>Num Of coffee {numOfCoffee}</h2>
      {/* Dispatching the buyCoffee action when the button is clicked */}
      <button onClick={() => dispatch(buyCoffee())}>Buy Coffee</button>
    </div>
  );
};

export default HooksCoffeeContainer;
