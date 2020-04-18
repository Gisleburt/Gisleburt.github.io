import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SkillsList, { SkillsListCategory } from './SkillsList';

describe('SkillsList', () => {
  const skillsCategories: SkillsListCategory[] = [
    {
      category: 'Cat1',
      skills: ['skill1', 'skill2'],
    },
    {
      category: 'Cat2',
      skills: ['skill3', 'skill4'],
    },
  ];

  it('should show the category', () => {
    const wrapper = shallow(<SkillsList skillsCategories={skillsCategories} />);
    expect(wrapper.text()).to.include('Cat1');
    expect(wrapper.text()).to.include('Cat2');
  });

  it('should separate skills with a comma', () => {
    const wrapper = shallow(<SkillsList skillsCategories={skillsCategories} />);
    expect(wrapper.text()).to.include('skill1, skill2');
    expect(wrapper.text()).to.include('skill3, skill4');
  });
});
