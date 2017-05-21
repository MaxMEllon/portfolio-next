import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import configureStore from 'redux-mock-store'
import Loading from '../Loading.jsx';
import * as loadingTypes from '../../constants/LoadingTypes';

const mockStore = configureStore();

describe('Loading Component', () => {
  it('allows us to set props', () => {
    const { INITIAL } = loadingTypes;
    const store = mockStore({ loading: INITIAL });
    const wrapper = shallow(<Loading store={store} />);
    assert.equal(wrapper.props().loading, INITIAL);
  });
});
