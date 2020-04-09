import React from 'react';

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
    <h3>
      {company} - {title} - {formatDate(startDate)} - {formatDate(endDate)}
    </h3>
    {description.map((block) => <p key={block.length}>{block}</p>)}
  </div>
);

export default WorkHistoryItem;
