import React from 'react';
import { Content } from '../../types/domain';
import WorkHistoryItem from './WorkHistoryItem';

type Props = {
  workHistory: Content.WorkHistory;
};

const WorkHistory = ({ workHistory }: Props): JSX.Element => (
  <section>
    <h2>{workHistory.title}</h2>
    {workHistory.roles.map((item) => (
      <WorkHistoryItem key={`${item.business}-${item.role}`} {...item} />
    ))}
  </section>
);

export default WorkHistory;
