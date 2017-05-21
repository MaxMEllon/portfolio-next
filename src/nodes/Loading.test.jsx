import React from 'react';
import { mount } from 'enzyme';
import assert from 'power-assert';
import Loading from '../loading';

describe('Loading Component', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<Loading loading />);
    assert(wrapper.props().loading === true);
  });
});
