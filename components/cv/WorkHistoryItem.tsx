import React from 'react';
import styled from 'styled-components';
import H3 from '../html/H3';

const WorkHistoryTitle = styled(H3)`
  display: flex;
  justify-content: space-between;
`;
WorkHistoryTitle.displayName = 'WorkHistoryTitle';

export interface WorkHistoryItemProps {
  company: string;
  title: string;
  startDate: Date;
  endDate?: Date;
  description: string[];
}

const formatDate = (date?: Date): string => (
  date ? Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(date) : 'Now'
);

const WorkHistoryItem = ({
  company, title, startDate, endDate, description,
}: WorkHistoryItemProps): JSX.Element => (
  <div>
    <WorkHistoryTitle>
      <span>{company} - {title}</span>
      <span>{formatDate(startDate)} - {formatDate(endDate)}</span>
    </WorkHistoryTitle>
    {description.map((block) => <p key={block.length}>{block}</p>)}
  </div>
);

export default WorkHistoryItem;
