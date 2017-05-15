import { Iterable } from 'immutable';

const compareTypeByStr = (v, t) => toString.call(v) === `[object ${t}]`;

/* eslint no-void: 0 */
export const isNil = obj => obj === null || obj === void 0;
export const isFunction = any => compareTypeByStr(any, 'Function');
export const isString = any => compareTypeByStr(any, 'String');
export const isArray = any => compareTypeByStr(any, 'Array');
export const isImmutable = any => Iterable.isIterable(any);
export const isBlank = any => (isString(any) && any === '') || isNil(any);
export const isMethod = (key, obj) => key !== 'constructor' && isFunction(obj[key]);

export const autoBind = (instance) => {
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
  isArray,
  isString,
  isMethod,
  isBlank,
  isImmutable,
  autoBind,
};

/* eslint import/prefer-default-export: 0 */
export default M;
