import React from 'react';

interface WorkHistoryItemProps {
  company: string;
  title: string;
  startDate: Date;
  endDate?: Date;
  children: JSX.Element[];
}

const formatDate = (date?: Date): string => (
  date ? Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(date) : 'Now'
);

const WorkHistoryItem = ({
  company, title, startDate, endDate, children,
}: WorkHistoryItemProps): JSX.Element => (
  <div>
    <h3>
      {company} - {title} - {formatDate(startDate)} - {formatDate(endDate)}
    </h3>
    {children}
  </div>
);

export default WorkHistoryItem;
