import React from 'react';
import styled from 'styled-components';
import { Content } from '../../types/domain';

const WorkHistoryTitle = styled.h3`
  display: flex;
  justify-content: space-between;
`;
WorkHistoryTitle.displayName = 'WorkHistoryTitle';

type Props = Content.RoleDescription;

const formatDate = (date: string | Date): string =>
  Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(new Date(date));

const formatPossibleDate = (date?: string | Date): string => (date ? formatDate(date) : 'Now');

const WorkHistoryItem = ({ business, role, startDate, endDate, description }: Props): JSX.Element => (
  <div>
    <WorkHistoryTitle>
      <span>
        {business} - {role}
      </span>
      <span>
        {formatPossibleDate(startDate)} - {formatPossibleDate(endDate)}
      </span>
    </WorkHistoryTitle>
    {description.split(/[\n\r]+/).map((block) => (
      <p key={block.length}>{block}</p>
    ))}
  </div>
);

export default WorkHistoryItem;
