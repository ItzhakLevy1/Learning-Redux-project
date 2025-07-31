// Import connect from redux
import { connect } from "react-redux";

// Import the buyIcecream action function
import { buyIcecream } from "../redux";

// Create a iceCream function that accepts props and returns an h2 tag with the props.numOfIcecereams value derived from the mapStateToProps function
// and a button tag with the props.buyIcecream action function derived from the mapDispatchToProps passed in as a prop
const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number Of Ice Creams {props.numOfIcecreams}</h2>
      <button onClick={props.buyIcecream}>Buy Ice Cream</button>
    </div>
  );
};

// Create the mapStateToProps function that accepts the state and rerurns the value of numOfIcecreams pulled from it into the props
const mapStateToProps = (state) => {
  return {
    numOfIcecreams: state.icecream.numOfIcecreams,
  };
};

// Create the mapDispatchToProps function that accepts a dispatch and rerurns the action of buyIcecream pulled from it into the props
const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => {
      dispatch(buyIcecream());
    },
  };
};

// Export the connect with both mapping functions passed into it and the name of the component (IceCreamContainer) at the outer parenthesis
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
