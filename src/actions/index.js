import { createAction } from 'redux-act';

export const START_FETCH = 'START_FETCH';
export const startFetch = createAction(START_FETCH);
export const END_FETCH = 'END_FETCH';
export const endFetch = createAction(END_FETCH);

export const FETCH_ABOUT_INFO = 'FETCH_ABOUT_INFO';
export const fetchAboutInfo = createAction(FETCH_ABOUT_INFO);
export const OK_FETCH_ABOUT_INFO = 'OK_FETCH_ABOUT_INFO';
export const okFetchAboutInfo = createAction(OK_FETCH_ABOUT_INFO);
export const NG_FETCH_ABOUT_INFO = 'NG_FETCH_ABOUT_INFO';
export const ngFetchAboutInfo = createAction(NG_FETCH_ABOUT_INFO);
