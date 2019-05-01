import { fork } from 'redux-saga/effects';
import  homeSaga from './containers/HomePage/saga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
      homeSaga()
    ])
  }