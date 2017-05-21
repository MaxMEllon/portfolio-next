import React from 'react';
import { mount } from 'enzyme';
import { assert } from 'chai';
import configureStore from 'redux-mock-store'
import HeartStone from '../HeartStone';

const mockStore = configureStore();

describe('HeartStone Component', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<HeartStone />);
  });
});
