const isNil = obj => obj === null || obj === undefined;

const isFunction = any => toString.call(any) === '[object Function]';

const isMethod = (key, obj) => obj !== 'constructor' && isFunction(obj[key]);

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
  isFunction,
  isMethod,
  autoBind,
};

/* eslint import/prefer-default-export: 0 */
export default M;
