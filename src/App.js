import React from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <HomePage></HomePage>
        </header>
      </div>
    </Provider>
  );
}

export default App;
