import React from 'react';
import styled from 'styled-components';
import SiteHead from '../SiteHead';
import ContactDetails from '../cv/ContactDetails';
import WorkHistory from '../cv/WorkHistory';
import Skills from '../cv/Skills';
import Reset from '../css/Reset';
import H1 from '../html/H1';
import Global from '../css/Global';
import { Content } from '../../types/domain';
import { isContactDetails, isSection, isSkills, isWorkHistory } from '../../types/domainPredicates';
import Section from '../modules/Section';

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

type CvContentTypes = Content.ContactDetails | Content.Section | Content.Skills | Content.WorkHistory;

type CvContentProps = {
  content: CvContentTypes;
};

const CvContent = ({ content }: CvContentProps) => {
  if (isSection(content)) {
    return <Section section={content} />;
  }
  if (isContactDetails(content)) {
    return <ContactDetails contactDetails={content} />;
  }
  if (isSkills(content)) {
    return <Skills skills={content} />;
  }
  if (isWorkHistory(content)) {
    return <WorkHistory workHistory={content} />;
  }
  throw new Error(`Unknown type passed as CV content: ${JSON.stringify(content)}`);
};

type Props = {
  cv: Content.Cv;
};

const Cv = ({ cv }: Props): JSX.Element => (
  <Page>
    <Reset />
    <Global />
    <Body>
      <SiteHead title={cv.title} />
      <H1>{cv.title}</H1>
      {cv.content.map((content) => (
        <CvContent content={content} />
      ))}

      {/* <PersonalStatement statement={cv.personalStatement} /> */}
      {/* <Skills skillsCategories={cv.skillsListCategories} skillsDescription={cv.skillsDescription} /> */}
      {/* <WorkHistory history={cv.workHistory} /> */}
      {/* <ContactDetails contactDetails={cv.contactDetails} /> */}
    </Body>
  </Page>
);

export default Cv;
