import { assert } from 'chai';
import M from '../M';

/* eslint import/no-named-as-default-member: 0 */
describe('M', () => {
  it('isNil', () => {
    assert.equal(M.isNil(true), false);
    assert.equal(M.isNil(false), false);
    assert.equal(M.isNil(null), true);
    assert.equal(M.isNil(undefined), true);
    assert.equal(M.isNil(0), false);
    assert.equal(M.isNil(''), false);
    assert.equal(M.isNil(() => {}), false);
  });

  it('isFunction', () => {
    assert.equal(M.isFunction(true), false);
    assert.equal(M.isFunction(false), false);
    assert.equal(M.isFunction(null), false);
    assert.equal(M.isFunction(undefined), false);
    assert.equal(M.isFunction(0), false);
    assert.equal(M.isFunction(''), false);
    assert.equal(M.isFunction(() => {}), true);
  });

  it('isString', () => {
    assert.equal(M.isString(true), false);
    assert.equal(M.isString(false), false);
    assert.equal(M.isString(null), false);
    assert.equal(M.isString(undefined), false);
    assert.equal(M.isString(0), false);
    assert.equal(M.isString(''), true);
    assert.equal(M.isString(() => {}), false);
    assert.equal(M.isString('aaaaaa'), true);
  });
});
