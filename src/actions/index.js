// @flow
import { createAction } from 'redux-act';

export const START_FETCH : string = 'START_FETCH';
export const startFetch = createAction(START_FETCH);
export const END_FETCH : string = 'END_FETCH';
export const endFetch = createAction(END_FETCH);

export const FETCH_ABOUT_INFO : string = 'FETCH_ABOUT_INFO';
export const fetchAboutInfo = createAction(FETCH_ABOUT_INFO);
export const OK_FETCH_ABOUT_INFO : string = 'OK_FETCH_ABOUT_INFO';
export const okFetchAboutInfo = createAction(OK_FETCH_ABOUT_INFO);

export const FETCH_ARTICLES : string = 'FETCH_ARTICLES';
export const fetchArticles = createAction(FETCH_ARTICLES);
export const OK_FETCH_ARTICLES : string = 'OK_FETCH_ARTICLES';
export const okFetchArticles = createAction(OK_FETCH_ARTICLES);

export const NOTIFY_ERROR_2_USER : string = 'NOTIFY_ERROR_2_USER';
export const notifyErrorToUser = createAction(NOTIFY_ERROR_2_USER);
export const RESET_ERROR_NOTIFY : string = 'RESET_ERROR_NOTIFY';
export const resetErrorNotify = createAction(RESET_ERROR_NOTIFY);

export const FAIL_XHR : string = 'FAIL_XHR';
export const failXHR = createAction(FAIL_XHR);
