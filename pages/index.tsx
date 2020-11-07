import React from 'react';
import styled from 'styled-components';
import { GetStaticProps } from 'next';
import SiteHead from '../components/SiteHead';
import ContactDetails from '../components/cv/ContactDetails';
import WorkHistory from '../components/cv/WorkHistory';
import Skills from '../components/cv/Skills';
import PersonalStatement from '../components/cv/PersonalStatement';
import Reset from '../components/css/Reset';
import H1 from '../components/html/H1';
import Global from '../components/css/Global';
import { CurriculumVitae } from '../content/types';

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

const Home = ({ cv }: Props): JSX.Element => (
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

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const contentful = new Contentful(process.env.CONTENTFUL_SPACE_ID || '', process.env.CONTENTFUL_ACCESS_TOKEN || '');
  const cv = await contentful.getCv();
  return {
    props: {
      cv,
    },
  };
};
