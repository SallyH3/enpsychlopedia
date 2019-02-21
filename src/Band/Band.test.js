import React from 'react';
import Band from './Band';
import Bands from '../Bands/Bands';
import { shallow } from 'enzyme';

let mockBand = {
  name: "Sparklehorse",
  origin: "Richmond Virginia",
  image: "https://i.imgur.com/ciMF4gb.jpg",
  members: [
    "Mark Linkous",
    "Scott Minor"
  ],
  genreId: 1,
  active: false,
  label: "Slow River",
  sideProjects: [
    "Danger Mouse",
    "Sol Seppy",
    "David Lynch",
    "Angela Faye Martin"
  ]
};

const getCurrentBandMock = jest.fn();

describe('Band', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Band 
        key={1}
        band={mockBand}
        getCurrentBand={getCurrentBandMock}
      />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke sendBandData when a band is clicked', () => {
    wrapper.find('.band-container').simulate('click', { preventDefault: () => {}});
    expect(getCurrentBandMock).toBeCalled(); 
  });


});