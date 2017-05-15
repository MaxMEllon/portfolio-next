import { Record } from 'immutable';
import { autoBind } from '../utils/M';

const defaultValue = {
  detail: null,
  link: null,
  title: null,
  year: null,
};

export default class ActivityRecord extends Record(defaultValue) {
  constructor(activity) {
    super({ ...activity });
    autoBind(this);
  }
}
