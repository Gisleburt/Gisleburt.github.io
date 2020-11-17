import React from 'react';
import SkillsList from './SkillsList';
import Section from '../html/Section';
import H2 from '../html/H2';
import { Content } from '../../types/domain';

type Props = {
  skills: Content.Skills;
};

const Skills = ({ skills }: Props): JSX.Element => (
  <Section>
    <H2>{skills.title}</H2>
    <p>{skills.description}</p>
    <SkillsList skillsList={skills.skillsList} />
  </Section>
);

export default Skills;
