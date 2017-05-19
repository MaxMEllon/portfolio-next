// @flow
import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';
import { get } from '../utils/M';

/**
 * axiosGetWrapper()
 * wrapped axios.get() for effects of redux-saga.
 * @params {string}
 * @return {Promise} AxiosPromise to Promise
 */
const axiosGetWrapper = (url: string) => axios.get(url);

/**
 * aboutTask()
 * fetch `about` infomation by server, and dispatch to reducer.
 * this is forked by `rootSaga()`
 */
function* aboutTask() {
  yield put(actions.startFetch());
  try {
    const { API_BASE_URL } = process.env;
    const response = yield call(axiosGetWrapper, `${String(API_BASE_URL)}/about.json`);
    yield delay(200);
    yield put(actions.okFetchAboutInfo(response.data));
  } catch (err) {
    yield put(actions.failXHR(err));
  }
  yield put(actions.endFetch());
}

/**
 * artilcTask()
 * fetch `artile` infomation by server, and dispatch to reducer.
 * this is forked by `rootSaga()`
 */
function* articlesTask() {
  yield put(actions.startFetch());
  try {
    const { API_BASE_URL } = process.env;
    const response = yield call(axiosGetWrapper, `${String(API_BASE_URL)}/article.json`);
    yield delay(200);
    yield put(actions.okFetchArticles(response.data));
  } catch (err) {
    yield put(actions.failXHR(err));
  }
  yield put(actions.endFetch());
}

/**
 * errorHandlingTask()
 * This tasks for handling a thrown error, and notify to reducer.
 * this is forked by `rootSaga()`
 */
function* errorHandlingTask(action) {
  const { payload } = action;
  yield put(actions.notifyErrorToUser({
    status: get(payload, ['response', 'status'], 0),
    message: get(payload, ['message'], 'No Message'),
    userMessage: '通信エラーにより，データの取得に失敗しました．',
  }));
  yield delay(10000);
  yield put(actions.resetErrorNotify());
}

export default function* rootSaga(): Generator<void, any, any> {
  yield takeEvery(actions.FETCH_ABOUT_INFO, aboutTask);
  yield takeEvery(actions.FETCH_ARTICLES, articlesTask);
  yield takeEvery(actions.FAIL_XHR, errorHandlingTask);
}
