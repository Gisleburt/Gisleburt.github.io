import React from 'react';
import styled from 'styled-components';
import SiteHead from '../components/SiteHead';
import ContactDetails from '../components/cv/ContactDetails';
import WorkHistory from '../components/cv/WorkHistory';
import Skills from '../components/cv/Skills';
import PersonalStatement from '../components/cv/PersonalStatement';
import Reset from '../components/css/Reset';
import {
  contactDetails,
  personalStatement,
  skillsDescription,
  skillsListCategories,
  title,
  workHistory,
} from '../content/content';
import H1 from '../components/html/H1';
import Global from '../components/css/Global';

const Page = styled.div`
  color: #a7b8c9;
  background-color: #2b2b2b;
  font-family: Lato, sans-serif;
  font-weight: 300;
  font-size: 1.4rem;
  letter-spacing: .1rem;
  line-height: 2rem;
  padding: 20px 0 30px;
`;
Page.displayName = 'Page';

const Body = styled.div`
  max-width: 800px;
  margin: auto;
`;
Body.displayName = 'Body';

const Home = (): JSX.Element => (
  <Page>
    <Reset />
    <Global />
    <Body>
      <SiteHead title={title} />
      <H1>{title}</H1>
      <PersonalStatement statement={personalStatement} />
      <Skills skillsCategories={skillsListCategories} skillsDescription={skillsDescription} />
      <WorkHistory history={workHistory} />
      <ContactDetails contactDetails={contactDetails} />
    </Body>
  </Page>
);

export default Home;
