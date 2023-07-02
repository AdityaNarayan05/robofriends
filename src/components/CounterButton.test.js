import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

describe('CounterButton', () => {
  it('should render CounterButton component', () => {
    const wrapper = shallow(<CounterButton color="blue" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should increment count when button is clicked', () => {
    const wrapper = shallow(<CounterButton color="blue" />);
    const button = wrapper.find('button');

    expect(wrapper.state('count')).toEqual(1);

    button.simulate('click');
    expect(wrapper.state('count')).toEqual(2);

    button.simulate('click');
    expect(wrapper.state('count')).toEqual(3);
  });

  it('should not update component when count state remains the same', () => {
    const wrapper = shallow(<CounterButton color="blue" />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ color: 'red' }, { count: 1 });

    expect(shouldUpdate).toBe(false);
  });

  it('should update component when count state changes', () => {
    const wrapper = shallow(<CounterButton color="blue" />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ color: 'red' }, { count: 2 });

    expect(shouldUpdate).toBe(true);
  });
});
