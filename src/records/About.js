import { Record } from 'immutable';
import M from '../utils/M';

const defaultValue = {
  birthday: null,
  favorite: null,
  game: null,
  handle: null,
  name: null,
};

export default class ActivityRecord extends Record(defaultValue) {
  constructor(about) {
    super({ ...about });
    M.autoBind(this);
  }
}
