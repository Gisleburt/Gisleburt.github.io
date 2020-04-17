import React from 'react';
import styled from 'styled-components';
import SiteHead from '../components/SiteHead';
import ContactDetails from '../components/cv/ContactDetails';
import WorkHistory from '../components/cv/WorkHistory';
import Skills from '../components/cv/Skills';
import PersonalStatement from '../components/cv/PersonalStatement';
import Title from '../components/Title';
import StyleReset from '../components/StyleReset';
import {
  contactDetails, personalStatement, skillsDescription, skillsListCategories, title, workHistory,
} from '../content/content';

const Page = styled.div`
  color: #a7b8c9;
  background-color: #2b2b2b;
`;

const Body = styled.div`
  max-width: 800px;
  margin: auto;
`;

const Home = (): JSX.Element => (
  <Page>
    <Body>
      <StyleReset />
      <SiteHead title={title} />
      <Title>{title}</Title>
      <PersonalStatement statement={personalStatement} />
      <Skills skillsCategories={skillsListCategories} skillsDescription={skillsDescription} />
      <WorkHistory history={workHistory} />
      <ContactDetails contactDetails={contactDetails} />
    </Body>
  </Page>
);

export default Home;
