import React from 'react';

export interface SkillsListCategoryProps {
  category: string;
  skills: string[];
}

const SkillsListCategory = ({ category, skills }: SkillsListCategoryProps): JSX.Element => (
  <>
    <dt>{category}</dt>
    <dd>{skills.join(', ')}</dd>
  </>
);

export default SkillsListCategory;
