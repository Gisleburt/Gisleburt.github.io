import React from 'react';
import SkillsList from './SkillsList';
import { Content } from '../../types/domain';

type Props = {
  skills: Content.Skills;
};

const Skills = ({ skills }: Props): JSX.Element => (
  <section>
    <h2>{skills.title}</h2>
    <p>{skills.description}</p>
    <SkillsList skillsList={skills.skillsList} />
  </section>
);

export default Skills;
