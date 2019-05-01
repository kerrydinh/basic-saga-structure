import { call, put, select, takeLatest } from 'redux-saga/effects';
import { HOME_ACTION_TYPE } from './action';

export function* updateData() {
    const list = [];
    list.push("New item 1");
    list.push("New item 2");
    list.push("New item 3");
    list.push("New item 4");
    yield put({type: HOME_ACTION_TYPE.LOAD_DATA_SUCCESSFULLY, data: list})
}

export default function* homeSaga() {
    yield takeLatest(HOME_ACTION_TYPE.LOAD_DATA, updateData);
}

/*export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}*/