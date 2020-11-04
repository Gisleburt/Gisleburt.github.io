import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SkillsList from './SkillsList';
import { Cv } from '../../content/types';

describe('SkillsList', () => {
  const skillsCategories: Cv.SkillsListCategory[] = [
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
    expect(wrapper.find('dt').at(0).text()).to.equal('Cat1');
    expect(wrapper.find('dt').at(1).text()).to.equal('Cat2');
  });

  it('should separate skills with a comma', () => {
    const wrapper = shallow(<SkillsList skillsCategories={skillsCategories} />);
    expect(wrapper.find('dd').at(0).text()).to.equal('skill1, skill2');
    expect(wrapper.find('dd').at(1).text()).to.equal('skill3, skill4');
  });
});
