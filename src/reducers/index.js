import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import * as actions from '../actions';

export const initialState = {
  about: null,
  environment: null,
  articles: null,
  activities: null,
  projects: null,
};

const about = createReducer({
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
