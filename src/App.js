import React, { Suspense } from "react";
import "./App.css";
import Routing from "./Routing";
import store from "./store";
import { Provider } from "react-redux";
import Loader from "react-loader-spinner";

function App() {
  return (
    <Provider store={store}>
      <Suspense
        fallback={
          <Loader type="Ball-Triangle" color="#00BFFF" height="100" width="100" />
        }
      >
        <div className="App">
          <Routing />
        </div>
      </Suspense>
    </Provider>
  );
}

export default App;
