import { put, takeLatest } from "redux-saga/effects";
import { HOME_ACTION_TYPE } from "./action";

export function* loadData() {
  const json = yield fetch(
    "https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc"
  ).then(response => response.json());
  yield put({ type: HOME_ACTION_TYPE.LOAD_DATA_SUCCESSFULLY, data: json.articles });
}

export default function* homeSaga() {
  yield takeLatest(HOME_ACTION_TYPE.LOAD_DATA, loadData);
}

/*export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}*/
