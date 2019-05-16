import { createStore, applyMiddleware, compose  } from 'redux';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { loadingBarMiddleware } from "react-redux-loading-bar";

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware), 
        applyMiddleware(loadingBarMiddleware())
    ),
)


sagaMiddleware.run(rootSaga);

export default store;