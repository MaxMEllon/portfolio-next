import { Iterable } from 'immutable';

const compareTypeByStr = (v, t) => toString.call(v) === `[object ${t}]`;

const MyTypeError = (name, message) => (
  new TypeError(`Unexpected type in ${name}, ${message}`)
);

/* eslint no-void: 0 */
export const isNil = obj => obj === null || obj === void 0;
export const isFunction = any => compareTypeByStr(any, 'Function');
export const isString = any => compareTypeByStr(any, 'String');
export const isArray = any => compareTypeByStr(any, 'Array');
export const isObject = any => compareTypeByStr(any, 'Object');
export const isImmutable = any => Iterable.isIterable(any);
export const isBlank = any => isNil(any) || (isString(any) && any === '');
export const isMethod = (key, obj) => key !== 'constructor' && isFunction(obj[key]);

/**
 * get()
 * gets the value at `path` of `target`.
 * If not be resolved, then return the `defaultValue`.
 * @param {Object} target
 * @param {Array<String>} path
 * @param {any} [defaultValue]
 * @return {any}
 */
export const get = (target, path, defaultValue = undefined) => {
  if (isNil(target)) return undefined;
  if (!isArray(path)) throw MyTypeError('M.get()', '`path` expected Array<String>');
  let object = target;
  let index = 0;
  const length = path.length;
  while (!isNil(object) && index < length) {
    if (isBlank(path[index])) throw MyTypeError('M.get()', '`path[]` expected String');
    object = object[path[index]];
    index += 1;
  }
  return (index && index === length) ? object : defaultValue;
};

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
