import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  const mockProps = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    id: 1,
  };

  it('should render Card component', () => {
    const wrapper = shallow(<Card {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display correct name, email, and image source', () => {
    const wrapper = shallow(<Card {...mockProps} />);
    expect(wrapper.find('h2').text()).toEqual(mockProps.name);
    expect(wrapper.find('p').text()).toEqual(mockProps.email);
    expect(wrapper.find('img').prop('src')).toContain(`https://robohash.org/${mockProps.id}?size=200x200`);
  });
});
