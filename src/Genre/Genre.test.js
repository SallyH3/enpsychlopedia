import React from 'react';
import Genre from './Genre';
import { shallow } from 'enzyme';

describe('Genre', () => {
  let wrapper
  beforeEach(()=> {
    wrapper = shallow(
    <Genre/>
    )
  });

  it('should match snapShot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});