import homeReducer from './containers/HomePage/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    home: homeReducer,
  });

export default rootReducer;