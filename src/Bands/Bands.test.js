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
});