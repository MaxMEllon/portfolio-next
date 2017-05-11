import _ from 'lodash';

const isNil = obj => obj === null || obj === undefined;

const isMethod = (key, obj) => obj !== 'constructor' && _.isFunction(obj[key]);

const autoBind = (instance) => {
  const self = instance;
  Object.getOwnPropertyNames(Object.getPrototypeOf(self)).forEach((key) => {
    if (isMethod(key, self)) {
      self[key] = self[key].bind(self);
    }
  });
};

const M = {
  isNil,
  isMethod,
  autoBind,
};

/* eslint import/prefer-default-export: 0 */
export default M;
