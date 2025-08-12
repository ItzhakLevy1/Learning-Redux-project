import "./App.css";
import { Provider } from "react-redux"; // Makes Redux store available to all components
import store from "./redux/store";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      {/* Wrap the app with Provider and pass the store as prop, this will provide the store to all comonents*/}
      <div className="App">
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
