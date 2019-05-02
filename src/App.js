import React from 'react';
import './App.css';
import Routing from './Routing';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Routing></Routing>
      </div>
    </Provider>
  );
}

export default App;
