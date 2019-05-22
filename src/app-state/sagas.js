import  homeSaga from '../containers/HomePage/state/saga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
      homeSaga()
    ])
  }