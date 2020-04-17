import React from 'react';
import SkillsList, { SkillsListProps } from './SkillsList';
import Section from '../html/Section';

export interface SkillsProps extends SkillsListProps {
  skillsDescription: string;
}

const Skills = ({ skillsCategories, skillsDescription }: SkillsProps): JSX.Element => (
  <Section>
    <h2>Skills</h2>
    <p>{skillsDescription}</p>
    <SkillsList skillsCategories={skillsCategories} />
  </Section>
);

export default Skills;
