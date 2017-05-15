import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';

/**
 * fetchAboutPromisify()
 * wrapped axios.get() for effects of redux-saga.
 * @return {Promise} promisify XML request by axios
 */
const fetchAboutPromisify = () => (
  axios.get(`${process.env.API_BASE_URL}/about.json`)
);

/**
 * fetchArticlesPromisify()
 * wrapped axios.get() for effects of redux-saga.
 * @return {Promise} promisify XML request by axios
 */
const fetchArticlesPromisify = () => (
  axios.get(`${process.env.API_BASE_URL}/article.json`)
);

/**
 * aboutTask()
 * fetch `about` infomation by server, and dispatch to reducer.
 * this is forked by `rootSaga()`
 */
function* aboutTask() {
  yield put(actions.startFetch());
  try {
    const response = yield call(fetchAboutPromisify);
    yield delay(200);
    yield put(actions.okFetchAboutInfo(response.data));
  } catch (err) {
    yield put(actions.failXHR(err));
  }
  yield put(actions.endFetch());
}

function* articlesTask() {
  yield put(actions.startFetch());
  try {
    const response = yield call(fetchArticlesPromisify);
    yield delay(200);
    yield put(actions.okFetchArticles(response.data));
  } catch (err) {
    yield put(actions.failXHR(err));
  }
  yield put(actions.endFetch());
}

function* errorHandlingTask() {
  yield put(actions.notifyErrorToUser);
}

export default function* rootSaga() {
  yield takeEvery(actions.FETCH_ABOUT_INFO, aboutTask);
  yield takeEvery(actions.FETCH_ARTICLES, articlesTask);
  yield takeEvery(actions.FAIL_XHR, errorHandlingTask);
}
