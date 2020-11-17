import React from 'react';
import styled from 'styled-components';
import { Content } from '../../types/domain';

export type Props = {
  skillsList: Content.SkillList[];
};

const SkillsListList = styled.dl`
  dl {
    display: grid;
    grid-template-columns: max-content auto;
    padding: 1rem 0 0;
  }

  dt {
    font-weight: 700;
    padding: 0 0.5rem 0 0;
  }
`;
SkillsListList.displayName = 'SkillsListList';

const SkillsList = ({ skillsList }: Props): JSX.Element => (
  <SkillsListList>
    {skillsList.map(({ title, skills }) => (
      <React.Fragment key={title}>
        <dt>{title}</dt>
        <dd>{skills.join(', ')}</dd>
      </React.Fragment>
    ))}
  </SkillsListList>
);

export default SkillsList;
