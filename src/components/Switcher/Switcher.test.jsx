import React from 'react';
import { shallow } from 'enzyme';
import Switcher from './Switcher';

describe('Switcher component', () => {
  it('renders Switcher', () => {
    const wrapper = shallow(<Switcher switchChange={() => {}} value="true" />);
    expect(wrapper).toMatchSnapshot();
  });
});
