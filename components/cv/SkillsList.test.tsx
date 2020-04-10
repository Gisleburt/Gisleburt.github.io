import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SkillsList from './SkillsList';
import { SkillsListCategoryProps } from './SkillsListCategory';

describe('SkillsList', () => {
  const skillsCategories: SkillsListCategoryProps[] = [
    {
      category: 'Cat1',
      skills: ['skill1'],
    },
    {
      category: 'Cat2',
      skills: ['skill2'],
    },
  ];

  it('should render each category', () => {
    const wrapper = shallow(<SkillsList skillsCategories={skillsCategories} />);
    const SkillsListCategory = wrapper.find('SkillsListCategory');
    expect(SkillsListCategory).to.have.length(2);

    expect(SkillsListCategory.at(0).prop('category')).to.equal(skillsCategories[0].category);
    expect(SkillsListCategory.at(0).prop('skills')).to.equal(skillsCategories[0].skills);

    expect(SkillsListCategory.at(1).prop('category')).to.equal(skillsCategories[1].category);
    expect(SkillsListCategory.at(1).prop('skills')).to.equal(skillsCategories[1].skills);
  });
});
