import React from 'react';
import SkillsListCategory, { SkillsListCategoryProps } from './SkillsListCategory';

export interface SkillsListProps {
  skillsCategories: SkillsListCategoryProps[];
}

const SkillsList = ({ skillsCategories }: SkillsListProps): JSX.Element => (
  <dl>
    {skillsCategories.map((skills) => (
      <SkillsListCategory key={skills.category} category={skills.category} skills={skills.skills} />
    ))}
  </dl>
);

export default SkillsList;
