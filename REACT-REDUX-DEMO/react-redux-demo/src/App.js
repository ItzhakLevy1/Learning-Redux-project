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

function App() {
  return (
    <Provider store={store}>
      {/* Wrap the app with Provider and pass the store as prop, this will provide the store to all comonents*/}
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <NewCakeContainer />
        <IceCreamContainer />
        <SodaContainer />
        <CoffeeContainer />
        <HooksCoffeeContainer />
      </div>
    </Provider>
  );
}

export default App;
