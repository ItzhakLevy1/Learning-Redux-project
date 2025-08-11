import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux"; // Import Provider from react-redux to connect the Redux store to the React app
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import SodaContainer from "./components/SodaContainer";
import CoffeeContainer from "./components/CoffeeContainer";
import HooksCoffeeContainer from "./components/HooksCoffeeContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import HookSodaContainr from "./components/NewSodaContainer";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      {/* Wrap the app with Provider and pass the store as prop, this will provide the store to all comonents*/}
      <div className="App">
        {/* Passing `cake` prop will display number of cakes */}
        <ItemContainer cake />
        {/* Without the `cake` prop, it will display number of sodas */}
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <NewCakeContainer />
        <IceCreamContainer />
        <SodaContainer />
        <HookSodaContainr />
        <CoffeeContainer />
        <HooksCoffeeContainer />
      </div>
    </Provider>
  );
}

export default App;
