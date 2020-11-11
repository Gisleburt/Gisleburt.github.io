import React from 'react';
import styled from 'styled-components';
import H3 from '../html/H3';
import { CurriculumVitae } from '../../types/domain';

const WorkHistoryTitle = styled(H3)`
  display: flex;
  justify-content: space-between;
`;
WorkHistoryTitle.displayName = 'WorkHistoryTitle';

export type WorkHistoryItemProps = CurriculumVitae.WorkHistoryItem;

const formatDate = (date: string | Date): string =>
  Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(new Date(date));

const formatPossibleDate = (date?: string | Date): string => (date ? formatDate(date) : 'Now');

const WorkHistoryItem = ({ company, title, startDate, endDate, description }: WorkHistoryItemProps): JSX.Element => (
  <div>
    <WorkHistoryTitle>
      <span>
        {company} - {title}
      </span>
      <span>
        {formatPossibleDate(startDate)} - {formatPossibleDate(endDate)}
      </span>
    </WorkHistoryTitle>
    {description.map((block) => (
      <p key={block.length}>{block}</p>
    ))}
  </div>
);

export default WorkHistoryItem;
