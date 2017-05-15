import Immutable from 'immutable';
import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import * as actions from '../actions';
import * as loadingTypes from '../constants/LoadingTypes';
import * as snackBarState from '../constants/ErrorSnackbarStates';
import AboutRecord from '../records/About';
import ArticleRecord from '../records/Article';
import XHRErrorRecord from '../records/XHRError';

export const initialState = {
  about: null,
  articles: null,
  activities: null,
  projects: null,
  environment: null,
  errors: null,
  loading: loadingTypes.INITIAL,
};

const loading = createReducer({
  [actions.startFetch]: () => loadingTypes.START_LOADING,
  [actions.endFetch]: () => loadingTypes.END_LOADING,
}, initialState.loading);

const about = createReducer({
  [actions.okFetchAboutInfo]: (_1, payload) => new AboutRecord({ ...payload }),
}, initialState.about);

const environment = createReducer({
}, initialState.environment);

const articles = createReducer({
  [actions.okFetchArticles]: (_1, payload) =>
    Immutable.List(payload.list.map(group =>
      Immutable.fromJS({
        name: group.name,
        articles: Immutable.List(group.articles.map(article => new ArticleRecord({ ...article }))),
      }),
    )),
}, initialState.articles);

const activities = createReducer({
}, initialState.activities);

const projects = createReducer({
}, initialState.projects);

const errors = createReducer({
  [actions.notifyErrorToUser]: (_1, payload) => (
    new XHRErrorRecord({
      ...payload,
      showState: snackBarState.SHOW,
    })
  ),
  [actions.resetErrorNotify]: state => state.merge({ showState: snackBarState.HIDE }),
}, initialState.errors);

export default combineReducers(
  {
    about,
    environment,
    articles,
    activities,
    projects,
    loading,
    errors,
  },
);
