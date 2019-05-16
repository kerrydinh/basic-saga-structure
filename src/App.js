import React, { Suspense } from "react";
import "./App.css";
import Routing from "./Routing";
import store from "./app-state/store";
import { Provider } from "react-redux";
import Loader from "react-loader-spinner";
import { client } from "./apollo";
import { ApolloProvider } from "react-apollo";
import LoadingBar from "react-redux-loading-bar";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
      <LoadingBar style={{ backgroundColor: 'blue', height: '5px' }} />
        <Suspense
          fallback={
            <Loader
              type="Ball-Triangle"
              color="#00BFFF"
              height="100"
              width="100"
            />
          }
        >
          <div className="App">
            <Routing />
          </div>
        </Suspense>
      <ToastContainer />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
