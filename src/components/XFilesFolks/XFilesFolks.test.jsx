import React from 'react';
import { shallow } from 'enzyme';
import XFilesFolks from './XFilesFolks';

describe('XFilesFolks component', () => {
  it('renders XFilesFolks', () => {
    const wrapper = shallow(<XFilesFolks switchChange={() => {}} value="true" />);
    expect(wrapper).toMatchSnapshot();
  });
});
