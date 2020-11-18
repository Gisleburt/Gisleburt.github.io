import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SkillsList from './SkillsList';
import { Content } from '../../types/domain';

describe('SkillsList', () => {
  const skillsCategories: Content.SkillList[] = [
    {
      __TYPE__: 'SkillList',
      id: '1',
      title: 'Cat1',
      skills: ['skill1', 'skill2'],
    },
    {
      __TYPE__: 'SkillList',
      id: '1',
      title: 'Cat2',
      skills: ['skill3', 'skill4'],
    },
  ];

  it('should show the category', () => {
    const wrapper = shallow(<SkillsList skillsList={skillsCategories} />);
    expect(wrapper.find('dt').at(0).text()).to.equal('Cat1');
    expect(wrapper.find('dt').at(1).text()).to.equal('Cat2');
  });

  it('should separate skills with a comma', () => {
    const wrapper = shallow(<SkillsList skillsList={skillsCategories} />);
    expect(wrapper.find('dd').at(0).text()).to.equal('skill1, skill2');
    expect(wrapper.find('dd').at(1).text()).to.equal('skill3, skill4');
  });
});
