import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SkillsListCategory from './SkillsListCategory';

describe('SkillsListCategory', () => {
  it('should render a definition term and definition definition', () => {
    const wrapper = shallow(<SkillsListCategory category="category" skills={['skill1', 'skill2']} />);
    expect(wrapper.find('dt')).to.have.length(1);
    expect(wrapper.find('dd')).to.have.length(1);
  });

  it('should show the category', () => {
    const wrapper = shallow(<SkillsListCategory category="category name" skills={['skill1', 'skill2']} />);
    expect(wrapper.text()).to.include('category name');
  });

  it('should separate skills with a comma', () => {
    const wrapper = shallow(<SkillsListCategory category="category" skills={['skill1', 'skill2']} />);
    expect(wrapper.text()).to.include('skill1, skill2');
  });
});
