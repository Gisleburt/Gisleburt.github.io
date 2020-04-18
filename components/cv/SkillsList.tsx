import React from 'react';
import styled from 'styled-components';

export interface SkillsListCategory {
  category: string;
  skills: string[];
}


export interface SkillsListProps {
  skillsCategories: SkillsListCategory[];
}

const DL = styled.dl`
  display: grid;
  grid-template-columns: auto auto;
`;

const DT = styled.dt`
  clear: left;
  float: left;
  font-weight: 700;
  padding: 0 3px 0 0;
`;

const DD = styled.dd`
  float: left;
`;

const SkillsList = ({ skillsCategories }: SkillsListProps): JSX.Element => (
  <DL>
    {skillsCategories.map(({ category, skills }) => (
      <React.Fragment key={category}>
        <DT>{category}</DT>
        <DD>{skills.join(', ')}</DD>
      </React.Fragment>
    ))}
  </DL>
);

export default SkillsList;
