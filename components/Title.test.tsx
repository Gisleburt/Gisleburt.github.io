import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Title from './Title';

describe('Title', () => {
  it('should display the title', () => {
    const wrapper = shallow(<Title>Hello, World</Title>);
    expect(wrapper.text()).to.equal('Hello, World');
  });
});
