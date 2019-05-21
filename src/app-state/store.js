import { createStore, applyMiddleware, compose  } from 'redux';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { loadingBarMiddleware } from "react-redux-loading-bar";
import { loadUser } from "redux-oidc";
//import userManager from "../utils/auth/auth-config";

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware), 
        applyMiddleware(loadingBarMiddleware())
    ),
)

//loadUser(store, userManager);
sagaMiddleware.run(rootSaga);

export default store;