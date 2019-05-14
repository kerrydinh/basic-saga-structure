import homeReducer from './containers/HomePage/reducer';
import { combineReducers } from 'redux';
import { loadingBarReducer } from "react-redux-loading-bar";

const rootReducer = combineReducers({
    home: homeReducer,
    loadingBar: loadingBarReducer
  });

export default rootReducer;