import React from 'react';
import './App.css';
import Routing from './Routing';
import InputForm from './containers/FormTest';
import store from './store';
import { Provider } from 'react-redux';

export const Context = React.createContext();

const stateValue = {
  text: "This is spartar"
};

function App() {
  return (
    <Provider store={store}>
      <Context.Provider value={stateValue}>
        <div className="App">
          
          <Routing></Routing>
        </div>
      </Context.Provider>
    </Provider>
  );
}

export default App;
