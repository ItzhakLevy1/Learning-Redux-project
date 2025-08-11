// A reusable container that can display either cakes or sodas count
// depending on the `cake` prop passed from its parent.

import { connect } from "react-redux";

const ItemContainer = (props) => {
  return (
    <div>
      {/* Display the selected item count from Redux store */}
      <h2>Item - {props.item}</h2>
    </div>
  );
};

// ownProps gives us access to props passed to the component
// If `cake` prop exists, get numOfCakes from store, otherwise get numOfSodas
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake?.numOfCakes // Optional chaining to avoid errors if state is missing
    : state.soda?.numOfSodas;

  return {
    item: itemState, // Pass the selected value to the component as `props.item`
  };
};

// Connect this component to Redux store
export default connect(mapStateToProps)(ItemContainer);
