import React from 'react';
import styled from 'styled-components';
import SiteHead from '../SiteHead';
import ContactDetails from '../cv/ContactDetails';
import WorkHistory from '../cv/WorkHistory';
import Skills from '../cv/Skills';
import PersonalStatement from '../cv/PersonalStatement';
import Reset from '../css/Reset';
import H1 from '../html/H1';
import Global from '../css/Global';
import { CurriculumVitae } from '../../types/domain';

const Page = styled.div`
  color: #a7b8c9;
  background-color: #2b2b2b;
  font-family: Lato, sans-serif;
  font-weight: 300;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  line-height: 2rem;
  padding: 20px 0 30px;
`;
Page.displayName = 'Page';

const Body = styled.div`
  max-width: 800px;
  margin: auto;
`;
Body.displayName = 'Body';

type Props = {
  cv: CurriculumVitae.Cv;
};

const Cv = ({ cv }: Props): JSX.Element => (
  <Page>
    <Reset />
    <Global />
    <Body>
      <SiteHead title={cv.title} />
      <H1>{cv.title}</H1>
      <PersonalStatement statement={cv.personalStatement} />
      <Skills skillsCategories={cv.skillsListCategories} skillsDescription={cv.skillsDescription} />
      <WorkHistory history={cv.workHistory} />
      <ContactDetails contactDetails={cv.contactDetails} />
    </Body>
  </Page>
);

export default Cv;
