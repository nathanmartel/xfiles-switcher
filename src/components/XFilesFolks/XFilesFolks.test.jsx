import React from 'react';
import { shallow } from 'enzyme';
import XFilesFolks from './XFilesFolks';

describe('XFilesFolks component', () => {
  it('renders XFilesFolks', () => {
    const characters = [{
      name: "Alex Krycek",
      gender: "Male",
      status: "Deceased",
      born: "1962",
      occupation: "formerly FBI Special Agent",
      rank: null,
      affiliations: "The Syndicate\nRussian Conspiracy\nMen In Black",
      portrayedby: "Nicholas Lea",
      image: "https://vignette.wikia.nocookie.net/x-files/images/6/6f/Kr.jpg/revision/latest?cb=20140201153811",
      description: "Alex Krycek (played by Nicholas Lea) was an operative for the Syndicate and briefly a Special Agent within the FBI.",
      categories: ["Former FBI personnel", "Syndicate", "FBI personnel", "Deceased people", "Main characters"]
    },
    {
      name: "Alvin Kersh",
      gender: "Male",
      status: "Alive",
      born: null,
      occupation: null,
      rank: "currently Deputy Director\nformerly Assistant Director",
      affiliations: "FBI\nX-files unit\nUS Air Force",
      portrayedby: "James Pickens, Jr.",
      image: "https://vignette.wikia.nocookie.net/x-files/images/2/29/Alvin_Kersh_X_Files_Season_11.png/revision/latest/scale-to-width-down/310?cb=20180203223926",
      description: "Alvin Kersh (played by James Pickens, Jr.) was an Assistant Director of the FBI.",
      categories: ["FBI personnel", "Main characters"]
    }];
    const wrapper = shallow(<XFilesFolks characters={characters} />);
    expect(wrapper).toMatchSnapshot();
  });
});
