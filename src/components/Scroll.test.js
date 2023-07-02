import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

describe('Scroll', () => {
  it('should render Scroll component', () => {
    const wrapper = shallow(<Scroll />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render children components', () => {
    const mockChildren = <div>Child component</div>;
    const wrapper = shallow(<Scroll>{mockChildren}</Scroll>);
    expect(wrapper.contains(mockChildren)).toBe(true);
  });

  it('should have correct styles', () => {
    const wrapper = shallow(<Scroll />);
    const expectedStyles = {
      overflow: 'scroll',
      border: '5px solid black',
      height: '800px',
    };
    expect(wrapper.prop('style')).toEqual(expectedStyles);
  });
});
