import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import configureStore from 'redux-mock-store'
import Loading from '../Loading.jsx';

const mockStore = configureStore();

describe('Loading Component', () => {
  it('allows us to set props', () => {
    const store = mockStore({ loading: true });
    const wrapper = shallow(<Loading store={store} />);
    assert.equal(wrapper.props().loading, true);
  });
});
