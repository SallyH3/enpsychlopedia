import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

  const genre = [{genre: "neoPsychedelia", origination: 1970, id: 1, characteristics: ["psychedelic pop", "jangly guitar rock", "heavily distorted", "free form jams", "recording experiments"]}, {genre: "stonerRock", origination: 1990, id: 2, characteristics: ["slow tempo", "bass heavy sound", "melodic vocals", "retro production", "groove laden"]}, {genre: "shoegazing", origination: 1980, id: 3, characteristics: ["guitar distortion", "delay effects", "obscured vocals", "ethereal layers", "reverb"]}]

  const bands = [
    {
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
    },
    {
      name: "Electric Wizard",
      origin: "Dorset England",
      image: "https://i.imgur.com/oZCj9bF.jpg",
      members: [
        "Jus Oborn",
        "Liz Buckingham",
        "Clayton Burgess",
        "Simon Poole"
      ],
      genreId: 2,
      active: true,
      label: "Rise Above",
      sideProjects: [
        "Ramesses",
        "Sourvein",
        "Iron Monkey",
        "Teeth of Lions",
        "Rule the Divine",
        "Crippled Black Phoenix",
        "With the Dead"
      ]
    },
    {
      name: "Ride",
      origin: "Oxford England",
      image: "https://i.imgur.com/B41x1yH.jpg",
      members: [
        "Andy Bell",
        "Laurence Colbert",
        "Mark Gardener",
        "Steve Queralt"
      ],
      genreId: 3,
      active: true,
      label: "Creation",
      sideProjects: [
        "Oasis",
        "Beady Eye",
        "The Jesus and Mary Chain",
        "Gay Dad",
        "The Animalhouse",
        "Infinite Cassette"
      ]
      }  
  ]

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default states', () => {
    expect(wrapper.state()).toEqual({
      genres: [], 
      bands: [], 
      bandsById: []
    });
  });

  it('should update bandsById state when organizeData is invoked', () => {
    wrapper.setState({'bands': bands, 'genres': genre});
    expect(wrapper.state('bandsById')).toEqual([]);
    wrapper.instance().organizeData();
    expect(wrapper.state('bandsById')).toHaveLength(3);
  });
});
