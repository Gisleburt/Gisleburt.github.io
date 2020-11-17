import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Skills from './Skills';
import { Content } from '../../types/domain';

describe('Skills', () => {
  const skills: Content.Skills = {
    __TYPE__: 'Skills',
    title: 'test title',
    description: 'test description',
    skillsList: [
      {
        __TYPE__: 'SkillList',
        title: 'Test',
        skills: ['Some', 'Skills', 'List'],
      },
    ],
  };

  it('should render a title', () => {
    const wrapper = shallow(<Skills skills={skills} />);
    expect(wrapper.text()).to.include(skills.title);
  });

  it('should render a description', () => {
    const wrapper = shallow(<Skills skills={skills} />);
    expect(wrapper.text()).to.include(skills.description);
  });

  it('should pass skillCategories to the skill list', () => {
    const wrapper = shallow(<Skills skills={skills} />);
    expect(wrapper.find('SkillsList').prop('skillsList')).to.equal(skills.skillsList); // Exact object
  });
});
