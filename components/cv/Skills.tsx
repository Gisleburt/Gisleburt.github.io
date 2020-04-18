import React from 'react';
import SkillsList, { SkillsListProps } from './SkillsList';
import Section from '../html/Section';
import H2 from '../html/H2';

export interface SkillsProps extends SkillsListProps {
  skillsDescription: string;
}

const Skills = ({ skillsCategories, skillsDescription }: SkillsProps): JSX.Element => (
  <Section>
    <H2>Skills</H2>
    <p>{skillsDescription}</p>
    <SkillsList skillsCategories={skillsCategories} />
  </Section>
);

export default Skills;
