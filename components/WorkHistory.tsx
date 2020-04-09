import React from 'react';
import WorkHistoryItem, { WorkHistoryItemProps } from './WorkHistoryItem';

export interface WorkHistoryProps {
  history: WorkHistoryItemProps[];
}

const WorkHistory = ({ history }: WorkHistoryProps): JSX.Element => (
  <div>
    <h2>Experience</h2>
    {history.map((item) => (
      <WorkHistoryItem key={item.company} {...item} />
    ))}
  </div>
);

export default WorkHistory;
