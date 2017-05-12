import _ from 'lodash';
import Immutable from 'immutable';
import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import * as actions from '../actions';
import * as loadingTypes from '../constants/LoadingTypes';
import AboutRecord from '../records/About';
import ArticleRecord from '../records/Article';
import M from '../utils/M';

export const initialState = {
  about: null,
  articles: null,
  activities: null,
  projects: null,
  environment: null,
  loading: loadingTypes.INITIAL,
};

const loading = createReducer({
  [actions.startFetch]: () => loadingTypes.START_LOADING,
  [actions.endFetch]: () => loadingTypes.END_LOADING,
}, initialState.loading);

const about = createReducer({
  [actions.okFetchAboutInfo]: (_1, payload) => {
    if (M.isNil(payload)) return null;
    return new AboutRecord({ ...payload });
  },
}, initialState.about);

const environment = createReducer({
}, initialState.environment);

const articles = createReducer({
  [actions.okFetchArticles]: (_1, payload) => {
    const anyList = _.get(payload, ['list'], null);
    if (M.isNil(anyList)) return null;
    return Immutable.List(anyList.map(group => Immutable.fromJS({
      name: group.name,
      articles: Immutable.List(group.articles.map(article => new ArticleRecord({ ...article }))),
    })));
  },
}, initialState.articles);

const activities = createReducer({
}, initialState.activities);

const projects = createReducer({
}, initialState.projects);

export default combineReducers(
  {
    about,
    environment,
    articles,
    activities,
    projects,
    loading,
  },
);
