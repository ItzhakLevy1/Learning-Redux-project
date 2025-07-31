import React from "react";
import { connect } from "react-redux";  // Import connect from react-redux to connect the component to the Redux store
import { buyCake } from "../redux/cake/cakeActions";    // buyCake is an action creation function that returns an action object to be sent to the store

function CakeContainer(props) { // This is a functional component that receives props of data and action from Redux
  return (
    <div>
      <h2>Number of cakes {props.numOfCakes}</h2>   {/* Display the number of cakes from Redux state */}
      <button onClick={props.buyCake}>Buy Cake</button>  {/* When the button is clicked, it triggers the buyCake action creator function passed as a prop */}
    </div>
  );
}

// Receives the entire Redux state tree and maps required state to props, defines which data from the Redux store will arrive as props to the component
const mapStateToProps = (state) => {    // Gets the entire state as a parameter
  return {
    // Pulls state.numOfCakes from the store, and puts it into the props under the name numOfCakes, from this point on we can access it as props.numOfCakes
    numOfCakes: state.cake.numOfCakes,
  };
};

// Maps dispatching of an action creator to a prop method
const mapDispatchToProps = (dispatch) => {  // Gets the dispatch action as a parameter
  return {
    buyCake: () => dispatch(buyCake()), // Maps the buyCake action creator function to a prop, from this point on we can access it as props.buyCake
  };
};

// Connects the component to the Redux store, passing in the state and action creator mappings 
// (Takes mapStateToProps and mapDispatchToProps and passes the values they return as props to the component)
// connect() returns a higher-order component that wraps the CakeContainer component, providing it with the necessary props 
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer); 
