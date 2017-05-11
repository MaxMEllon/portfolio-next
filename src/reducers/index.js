import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import * as actions from '../actions';
import AboutRecord from '../records/About';

export const initialState = {
  about: null,
  articles: null,
  activities: null,
  projects: null,
  environment: null,
  loading: false,
};

const loading = createReducer({
  [actions.startFetch]: () => true,
  [actions.endFetch]: () => false,
}, initialState.loading);

const about = createReducer({
  [actions.okFetchAboutInfo]: (state, payload) => new AboutRecord({ ...payload }),
}, initialState.about);

const environment = createReducer({
}, initialState.environment);

const articles = createReducer({
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
