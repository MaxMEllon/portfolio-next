import { Record } from 'immutable';
import M from '../utils/M';

const defaultValue = {
  title: null,
  url: null,
};

export default class ArticleRecord extends Record(defaultValue) {
  constructor(article) {
    super({ ...article });
    M.autoBind(this);
  }
}
