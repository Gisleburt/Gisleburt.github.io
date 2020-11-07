import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PersonalStatement from './PersonalStatement';

describe('PersonalStatement', () => {
  it('should render each part of the statement in a paragraph', () => {
    const statement = ['line 1', 'line 2', 'line 3'];
    const wrapper = shallow(<PersonalStatement statement={statement} />);
    expect(wrapper.find('p')).to.have.length(3);
  });
});
