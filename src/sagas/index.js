import axios from 'axios';
import { take, put, call, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';

const fetchAboutPromisify = () => (
  axios.get(`${process.env.API_BASE_URL}/about.json`)
);

const fetchArticlesPromisify = () => (
  axios.get(`${process.env.API_BASE_URL}/article.json`)
);

function* aboutTask() {
  yield put(actions.startFetch());
  try {
    const response = yield call(fetchAboutPromisify);
    yield delay(500);
    yield put(actions.okFetchAboutInfo(response.data));
  } catch (err) {
    yield put(actions.ngFetchAboutInfo(err));
  }
  yield put(actions.endFetch());
}

function* articlesTask() {
  yield put(actions.startFetch());
  try {
    const response = yield call(fetchArticlesPromisify);
    yield delay(500);
    yield put(actions.okFetchArticles(response.data));
  } catch (err) {
    yield put(actions.ngFetchArticles(err));
  }
  yield put(actions.endFetch());
}

export default function* rootSaga() {
  yield takeEvery(actions.FETCH_ABOUT_INFO, aboutTask);
  yield takeEvery(actions.FETCH_ARTICLES, articlesTask);
}
