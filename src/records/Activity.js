import { Record } from 'immutable';
import M from '../utils/M';

const defaultValue = {
  detail: null,
  link: null,
  title: null,
  year: null,
};

export default class ActivityRecord extends Record(defaultValue) {
  constructor(activity) {
    super({ ...activity });
    M.autoBind(this);
  }
}
