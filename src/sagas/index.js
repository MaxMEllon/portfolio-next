import axios from 'axios';
import { fork, take, put, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as actions from '../actions';

const x = undefined;

function* sampleSaga() {
}

export default function* rootSaga() {
  yield fork(sampleSaga);
}
