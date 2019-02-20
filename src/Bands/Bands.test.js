import React from 'react';
import Bands from './Bands';
import { shallow } from 'enzyme';

describe('Bands', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Bands />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default states', () => {
    expect(wrapper.state()).toEqual({ 
      active: [],
      inactive: [],
      currentPopup: {},
      showPopup: false
    });
  });
});