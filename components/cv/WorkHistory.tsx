import React from 'react';
import WorkHistoryItem from './WorkHistoryItem';
import Section from '../html/Section';
import H2 from '../html/H2';
import { CurriculumVitae } from '../../content/types';

export interface WorkHistoryProps {
  history: CurriculumVitae.WorkHistoryItem[];
}

const WorkHistory = ({ history }: WorkHistoryProps): JSX.Element => (
  <Section>
    <H2>Experience</H2>
    {history.map((item) => (
      <WorkHistoryItem key={item.company} {...item} />
    ))}
  </Section>
);

export default WorkHistory;
