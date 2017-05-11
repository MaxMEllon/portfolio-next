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
};

const about = createReducer({
  [actions.okFetchAboutInfo]: (state, payload) => {
    const about = new AboutRecord({ ...payload });
    return about;
  },
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
  },
);
