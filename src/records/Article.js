import { Record } from 'immutable';
import { autoBind } from '../utils/M';

const defaultValue = {
  title: null,
  url: null,
};

export default class ArticleRecord extends Record(defaultValue) {
  constructor(article) {
    super({ ...article });
    autoBind(this);
  }
}
