import React from 'react';
import WorkHistoryItem from './WorkHistoryItem';
import Section from '../html/Section';
import H2 from '../html/H2';
import { Content } from '../../types/domain';

type Props = {
  workHistory: Content.WorkHistory;
};

const WorkHistory = ({ workHistory }: Props): JSX.Element => (
  <Section>
    <H2>{workHistory.title}</H2>
    {workHistory.roles.map((item) => (
      <WorkHistoryItem key={`${item.business}-${item.role}`} {...item} />
    ))}
  </Section>
);

export default WorkHistory;
