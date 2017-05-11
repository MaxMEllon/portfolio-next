import axios from 'axios';
import { take, put, call, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';

const fetchAboutPromisify = () => (
  axios.get(`${process.env.API_BASE_URL}/about.json`)
);

function* aboutTask() {
  yield put(actions.startFetch());
  yield delay(500);
  try {
    const response = yield call(fetchAboutPromisify);
    yield put(actions.okFetchAboutInfo(response.data));
  } catch (err) {
    yield put(actions.ngFetchAboutInfo(err));
  }
  yield put(actions.endFetch());
}

export default function* rootSaga() {
  yield takeEvery(actions.FETCH_ABOUT_INFO, aboutTask);
}
