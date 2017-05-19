// @flow
import { Iterable } from 'immutable';

const compareTypeByStr = (v: any, t: string) => toString.call(v) === `[object ${t}]`;

/* eslint no-void: 0 */
export const isNil = (obj: any) => obj === null || obj === void 0;

/**
 * isFunction()
 * dynamic compare `maybeFunc`.
 * @param maybeFunc {any}
 * @return {boolean}
 */
export const isFunction = (maybeFunc: any) => compareTypeByStr(maybeFunc, 'Function');

/**
 * isString()
 * dynamic compare `maybeString`.
 * @param  {any} maybeString
 * @return {boolean}
 */
export const isString = (maybeString: any) => compareTypeByStr(maybeString, 'String');
export const isArray = (any: any) => compareTypeByStr(any, 'Array');
export const isObject = (any: any) => compareTypeByStr(any, 'Object');
export const isImmutable = (any: any) => Iterable.isIterable(any);
export const isBlank = (any: any) => isNil(any) || (isString(any) && any === '');
export const isMethod = (key: string, obj: any) => key !== 'constructor' && isFunction(obj[key]);

/**
 * get()
 * gets the value at `path` of `target`.
 * If not be resolved, then return the `defaultValue`.
 * @param {Object} target
 * @param {Array<String>} path
 * @param {any} [defaultValue]
 * @return {any}
 */
export const get = (target: any, path: Array<string>, defaultValue: any = undefined) => {
  if (isNil(target)) return undefined;
  let object = target;
  let index = 0;
  const length = path.length;
  while (!isNil(object) && index < length) {
    /* eslint no-plusplus: 0 */
    object = object[path[index++]];
  }
  return (index && index === length) ? object : defaultValue;
};

/**
 * autoBind()
 * This function bind to method of instance.
 * @param {any} instance
 */
export const autoBind = (instance: any) => {
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
