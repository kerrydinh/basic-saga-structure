import { put, takeLatest } from "redux-saga/effects";
import { HOME_ACTION_TYPE } from "./action";
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function* loadData() {
  try {
    yield put(showLoading())
    const jsonData = yield fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then(response => response.json());
    console.log(jsonData);
    yield put({ type: HOME_ACTION_TYPE.LOAD_DATA_SUCCESSFULLY, data: jsonData });
  } finally {
    yield put(hideLoading())
  }
 
}

export default function* homeSaga() {
  yield takeLatest(HOME_ACTION_TYPE.LOAD_DATA, loadData);
}

/*export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}*/
