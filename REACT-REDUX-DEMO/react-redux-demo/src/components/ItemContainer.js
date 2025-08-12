// A reusable container component that can display either cakes or sodas count / quantity
// depending on the `cake` prop passed from its parent component (ownProps).

import { connect } from "react-redux";
import { buyCake, buySoda } from "../redux";

const ItemContainer = (props) => {
  return (
    <div>
      {/* 
        Display item name + quantity.
        - itemName and itemQuantity are provided via mapStateToProps.
        - These values come from the Redux store, not directly from the parent.
      */}
      <h2>
        Numb Of {props.itemName} {props.itemQuantity}
      </h2>

      {/*
        The button triggers props.buyItem (injected via mapDispatchToProps).
        - buyItem dispatches the correct Redux action (buyCake or buySoda)
          based on the `cake` flag passed from the parent (ownProps).
      */}
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
};

/*
  mapStateToProps:
  - `state` is the entire Redux store state.
  - `ownProps` are the props passed to this component by its parent.
  - We use ownProps here to decide which part of the state to select (cakes or sodas).
  - Optional chaining (?.) prevents errors if the state slice is missing.
*/
const mapStateToProps = (state, ownProps) => {
  console.log("ownProps : ", ownProps);
  console.log("state : ", state);
  const isCake = ownProps.cake;
  const itemState = isCake ? state.cake?.numOfCakes : state.soda?.numOfSodas;

  return {
    itemQuantity: itemState, // From Redux store → used in the component
    itemName: isCake ? "Cake" : "Soda", // Derived from ownProps → not from Redux
  };
};

/*
  mapDispatchToProps:
  - Determines which action to dispatch based on ownProps.
  - If `cake` prop exists → dispatch buyCake.
  - If not → dispatch buySoda.
  - The component does not need to know which action it’s calling — just uses props.buyItem().
*/
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buySoda());

  return {
    buyItem: dispatchFunction,
  };
};

/*
  connect(mapStateToProps, mapDispatchToProps):
  - Injects Redux state (via mapStateToProps) into props → component will re-render when that state changes.
  - Injects dispatch functions (via mapDispatchToProps) into props.
  
  If we connect with:
    connect(null, mapDispatchToProps)
  - Component will NOT re-render on Redux state changes (since it’s not subscribed to state).
  - It can still dispatch actions.
*/
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
