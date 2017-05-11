import axios from 'axios';
import { fork, take, put, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as actions from '../actions';

const x = undefined;

function* aboutSaga() {
  while (typeof x === 'undefined') {
    yield take(actions.FETCH_ABOUT_INFO);
    try {
      const response = yield call(() => axios.get(`${process.env.API_BASE_URL}/about.json`));
      yield put(actions.okFetchAboutInfo(response.data));
    } catch (err) {
      yield put(actions.ngFetchAboutInfo(err));
    }
  }
}

export default function* rootSaga() {
  yield fork(aboutSaga);
}
