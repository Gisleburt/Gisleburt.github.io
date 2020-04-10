import React from 'react';
import SkillsList, { SkillsListProps } from './SkillsList';

export interface SkillsProps extends SkillsListProps {
  skillsDescription: string;
}

const Skills = ({ skillsCategories, skillsDescription }: SkillsProps): JSX.Element => (
  <div>
    <h2>Skills</h2>
    <p>{skillsDescription}</p>
    <SkillsList skillsCategories={skillsCategories} />
  </div>
);

export default Skills;
