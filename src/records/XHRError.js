import { Record } from 'immutable';
import { autoBind } from '../utils/M';
import { INITIAL } from '../constants/ErrorSnackbarStates';

const defaultValue = {
  message: null,
  status: null,
  userMessage: null,
  showState: INITIAL,
};

export default class XHRErrorRecord extends Record(defaultValue) {
  constructor(article) {
    super({ ...article });
    autoBind(this);
  }
}
