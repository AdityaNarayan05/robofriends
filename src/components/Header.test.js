import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import CounterButton from './CounterButton';

describe('Header', () => {
  it('should render Header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the title and CounterButton component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toEqual('RoboFriends');
    expect(wrapper.find(CounterButton)).toHaveLength(1);
  });

  it('should not update component when shouldComponentUpdate returns false', () => {
    const wrapper = shallow(<Header />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ prop: 'value' }, { state: 'value' });

    expect(shouldUpdate).toBe(false);
  });
});
