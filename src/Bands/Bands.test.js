import React from 'react';
import Bands from './Bands';
import { shallow } from 'enzyme';
let mimicBands = [{ name: 'Sparklehorse',
origin: 'Richmond Virginia',
image: 'https://i.imgur.com/ciMF4gb.jpg',
members: [ 'Mark Linkous', 'Scott Minor' ],
genreId: 1,
active: false,
label: 'Slow River',
sideProjects: 
 [ 'Danger Mouse',
   'Sol Seppy',
   'David Lynch',
   'Angela Faye Martin' ] },
{ name: 'Quest for Fire',
origin: 'Toronto Canada',
image: 'https://i.imgur.com/lamtwzr.jpg',
members: 
 [ 'Andrew Moszynski',
   'Chad Ross',
   'Mike Maxymuik',
   'Josh Bauman' ],
genreId: 1,
active: false,
label: 'Tee Pee',
sideProjects: [ 'The Deadly Snakes', 'Cursed', 'Comet Control' ] },
{ name: 'The Dream Syndicate',
origin: 'Los Angeles California',
image: 'https://i.imgur.com/7zklXlb.jpg',
members: [ 'Steve Wynn', 'Dennis Duck', 'Mark Walton', 'Jason Victor' ],
genreId: 1,
active: true,
label: 'Big Time',
sideProjects: 
 [ 'Grave',
   'Continental Drifters',
   'Steve Wynn and the Miracle Three',
   'Gutterball' ] },
{ name: 'Ozric Tentacles',
origin: 'Somerset England',
image: 'https://i.imgur.com/ClePm63.jpg',
members: [ 'Ed Wynne', 'Brandi Wynne', 'Silas Neptune', 'Balazs Szende' ],
genreId: 1,
active: true,
label: 'Magna Carta',
sideProjects: 
 [ 'Eat Static',
   'Nodens Ictus',
   'Here and Now',
   'Invisible System' ] },
{ name: 'Stardeath and the White Dwarfs',
origin: 'Oklahoma City Oklahoma',
image: 'https://i.imgur.com/6zAdp1g.jpg',
members: 
 [ 'Dennis Coyne',
   'Casey Joseph',
   'Matt Duckworth',
   'Ford Chastain' ],
genreId: 1,
active: true,
label: 'Warner Bros',
sideProjects: 
 [ 'The Flaming Lips',
   'New Fumes',
   'Linear Downfall',
   'Spaceface' ] },
{ name: 'The Black Angels',
origin: 'Austin TX',
image: 'https://i.imgur.com/TdwPPTe.jpg',
members: 
 [ 'Stephanie Bailey',
   'Christian Bland',
   'Alex Maas',
   'Kyle Hunt',
   'Jake Garcia' ],
genreId: 1,
active: true,
label: 'Light in the Attic',
sideProjects: 
 [ 'Mien',
   'The Viet Minh',
   'Christian Bland and The Revelators',
   'The UFO Club',
   'Sweet Tea' ] },
{ name: 'Spacemen 3',
origin: 'Warwickshire England',
image: 'https://i.imgur.com/2UcOZah.jpg',
members: 
 [ 'Peter Kember',
   'Jason Pierce',
   'Tim Morris',
   'Pete Bain',
   'Natty Brooker',
   'Sterling Roswell',
   'Will Carruthers',
   'Jonny Mattock',
   'Mark Refoy' ],
genreId: 1,
active: false,
label: 'Dedicated Records',
sideProjects: [ 'Spectrum', 'Spiritualized', 'Darkside' ] },
{ name: 'The Teardrops',
origin: 'Liverpool England',
image: 'https://i.imgur.com/hk7Fasw.png',
members: 
 [ 'Julian Cope',
   'Mick Finkler',
   'Gary Dwyer',
   'Paul Simpson',
   'Ged Quinn',
   'David Balfe',
   'Alan Gill',
   'Alfie Agius',
   'Jeff Hammer',
   'Troy Tate',
   'Ronnie Francois',
   'Ted Emmett',
   'Andy Radek' ],
genreId: 1,
active: false,
label: 'Zoo Records',
sideProjects: 
 [ 'Julian Cope',
   'Crucial Three',
   'Big In Japan',
   'Dalek I Love You',
   'The Wild Swans' ] },
{ name: 'Spindrift',
origin: 'Los Angeles CA',
image: 'https://i.imgur.com/JdLZXQX.jpg',
members: 
 [ 'Kirpatrick Thomas',
   'James Acton',
   'Daniel Allaire',
   'Joe Baluta',
   'Bobby Bones',
   'Becca Davidson',
   'Julie Patterson' ],
genreId: 1,
active: true,
label: 'Tee Pee Records',
sideProjects: [ 'Brian Jonestown Massacre', 'The Warlocks', 'Crooked Cowboy' ] },
{ name: 'Echo and the Bunnymen',
origin: 'Liverpool England',
image: 'https://i.imgur.com/suHhm1z.jpg',
members: [ 'Ian McCulloch', 'Will Sergeant' ],
genreId: 1,
active: true,
label: 'Warner Bros',
sideProjects: [ 'Electrafixion', 'Youth' ] },
{ name: 'The Church',
origin: 'Sydney Australia',
image: 'https://i.imgur.com/XoF7K90.jpg',
members: [ 'Steve Kilbey', 'Peter Koppes', 'Tim Powles', 'Ian Haug' ],
genreId: 1,
active: true,
label: 'Capitol',
sideProjects: [ 'Tactics', 'The Crystal Set', 'The Reels', 'Hex', 'The Well' ]}];

describe('Bands', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Bands  
      genreBands={mimicBands}
      currentSelection={'all'}
      />
    )
  });
  
  it('should match snapshot', () => {
    wrapper.setProps({currentSelection: 'all', genreBands: mimicBands});
    expect(wrapper).toMatchSnapshot("first");
  });

  it('should match snapshot with active set as filter', () => {
    wrapper.setProps({currentSelection: 'active', genreBands: mimicBands});
    expect(wrapper).toMatchSnapshot("second");
  });

  it('should match snapshot with inactive set as filter', () => {
    wrapper.setProps({currentSelection: 'inactive', genreBands: mimicBands});
    expect(wrapper).toMatchSnapshot("third");
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