import homeReducer from '../containers/HomePage/state/reducer';
import callBackReducer from '../containers/Callback/state/reducer';
import { combineReducers } from 'redux';
import { loadingBarReducer } from "react-redux-loading-bar";

const rootReducer = combineReducers({
    callback: callBackReducer,
    home: homeReducer,
    loadingBar: loadingBarReducer
  });

export default rootReducer;