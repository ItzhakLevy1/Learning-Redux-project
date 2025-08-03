// Import action type and connect
import { buyCoffee } from "../redux";
import { connect } from "react-redux";

// Create CoffeeContainer that returns jsx of an h2 and a btn tag
const CoffeeContainer = (props) => {
  return (
    <div>
      <h2>Number Of Coffee {props.numOfCoffee}</h2>
      <button onClick={props.buyCoffee}>Buy Coffee</button>
    </div>
  );
};

// Create an mapStateToProps function that accepts the whole state and maps the numOfCoffee part to a prop
const mapStateToProps = (state) => {
  return {
    ...state,
    numOfCoffee: state.coffee.numOfCoffee,
  };
};

// Create a mapDispatchToProps function that accepts a dispatch and returns a dispatch buyCoffee action
const mapDispatchToProps = (dispatch) => {
  return {
    buyCoffee: () => {
      dispatch(buyCoffee());
    },
  };
};

// Export using connect and pass in both mapStateToProps and mapDispatchToProps to the CoffeeContainer
export default connect(mapStateToProps, mapDispatchToProps)(CoffeeContainer);
