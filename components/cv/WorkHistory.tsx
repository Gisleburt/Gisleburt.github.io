import React from 'react';
import WorkHistoryItem, { WorkHistoryItemProps } from './WorkHistoryItem';
import Section from '../html/Section';

export interface WorkHistoryProps {
  history: WorkHistoryItemProps[];
}

const WorkHistory = ({ history }: WorkHistoryProps): JSX.Element => (
  <Section>
    <h2>Experience</h2>
    {history.map((item) => (
      <WorkHistoryItem key={item.company} {...item} />
    ))}
  </Section>
);

export default WorkHistory;
