import React from 'react';
import Popup from './Popup';
import { shallow } from 'enzyme';
import Bands from '../bands/bands';

let mockBand = {name: "Electric Wizard", origin: "Dorset England", image: "https://i.imgur.com/oZCj9bF.jpg", members: ["Jus Oborn","Liz Buckingham","Clayton Burgess","Simon Poole"], genreId: 2, active: true, label: "Rise Above", sideProjects: ["Ramesses","Sourvein","Iron Monkey","Teeth of Lions","Rule the Divine","Crippled Black Phoenix","With the Dead"]};

describe('Popup', () => {
  let wrapper;
  let wrapper2;
  beforeEach(() => {
    wrapper2 = shallow(
      <Bands/>
      );
    wrapper2.setState({'showPopup': true});
    wrapper = shallow(
      <Popup
        currentBandInfo={mockBand}
      />
    );
  });
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});