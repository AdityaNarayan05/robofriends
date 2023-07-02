import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';
import Card from './Card';

describe('CardList', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
    },
  ];

  it('should render CardList component', () => {
    const wrapper = shallow(<CardList robots={mockRobots} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct number of Card components', () => {
    const wrapper = shallow(<CardList robots={mockRobots} />);
    expect(wrapper.find(Card)).toHaveLength(mockRobots.length);
  });

  it('should pass correct props to Card components', () => {
    const wrapper = shallow(<CardList robots={mockRobots} />);
    wrapper.find(Card).forEach((node, index) => {
      expect(node.prop('id')).toEqual(mockRobots[index].id);
      expect(node.prop('name')).toEqual(mockRobots[index].name);
      expect(node.prop('email')).toEqual(mockRobots[index].email);
    });
  });
});
