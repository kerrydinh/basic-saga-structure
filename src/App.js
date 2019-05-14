import React, { Suspense } from "react";
import "./App.css";
import Routing from "./Routing";
import store from "./store";
import { Provider } from "react-redux";
import Loader from "react-loader-spinner";
import LoadingBar from "react-redux-loading-bar";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <LoadingBar style={{ backgroundColor: 'blue', height: '5px' }} />
      <Suspense
        fallback={
          <Loader type="Oval" color="#00BFFF" height="100" width="100" />
        }
      >
        <div className="App">
          <Routing />
        </div>
      </Suspense>
      <ToastContainer />
    </Provider>
  );
}

export default App;
