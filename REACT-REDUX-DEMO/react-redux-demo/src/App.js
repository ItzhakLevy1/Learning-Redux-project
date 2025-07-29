import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux"; // Import Provider from react-redux to connect the Redux store to the React app
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";

function App() {
  return (
    <Provider store={store}> {/* Wrap the app with Provider and pass the store as prop, this will provide the store to all comonents*/}
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;