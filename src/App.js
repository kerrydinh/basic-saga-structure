import React from 'react';
import './App.css';
import InputForm from './containers/FormTest';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        
        <InputForm></InputForm>
      </div>
    </Provider>
  );
}

export default App;
