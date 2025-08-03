// In this file, we will create a component that connects to the Redux store using the connect function.
// This component will display the number of sodas available and provide a button to buy soda.

// Import connect from redux
import { connect } from "react-redux";

// Import the buySoda action function
import { buySoda } from "../redux";

// Create a soda function that accepts props and returns an h2 tag with the props.numOfSodas value derived from the mapStateToProps function
// and a button tag with the props.buySoda action function derived from the mapDispatchToProps passed in as a prop
const SodaContainer = (props) => {
  return (
    <div>
      <h2>Number Of Sodas {props.numOfSodas}</h2>
      <button onClick={props.buySoda}>Buy Soda</button>
    </div>
  );
};

// Create the mapStateToProps function that accepts the state and rerurns the value of numOfSodas pulled from it into the props
const mapStateToProps = (state) => {
  return {
    numOfSodas: state.soda.numOfSodas,
  };
};

// Create the mapDispatchToProps function that accepts a dispatch and rerurns the action of buySoda pulled from it into the props
const mapDispatchToProps = (dispatch) => {
  return {
    buySoda: () => {
      dispatch(buySoda());
    },
  };
};

// If you want to use the action creator directly without mapDispatchToProps, you can uncomment the following lines
// const mapDispatchToProps = {
//   buySoda,
// };

// Export the connect with both mapping functions passed into it and the name of the component (SodaContainer) at the outer parenthesis
export default connect(mapStateToProps, mapDispatchToProps)(SodaContainer);
