import React from 'react';
import SiteHead from '../SiteHead';
import ContactDetails from '../cv/ContactDetails';
import WorkHistory from '../cv/WorkHistory';
import Skills from '../cv/Skills';
import Reset from '../css/Reset';
import Global from '../css/Global';
import { Content } from '../../types/domain';
import { isContactDetails, isSection, isSkills, isWorkHistory } from '../../types/domainPredicates';
import Section from '../modules/Section';
import Body from '../modules/Body';
import Page from '../modules/Page';

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
      <h1>{cv.title}</h1>
      {cv.content.map((content) => (
        <CvContent key={content.id} content={content} />
      ))}

      {/* <PersonalStatement statement={cv.personalStatement} /> */}
      {/* <Skills skillsCategories={cv.skillsListCategories} skillsDescription={cv.skillsDescription} /> */}
      {/* <WorkHistory history={cv.workHistory} /> */}
      {/* <ContactDetails contactDetails={cv.contactDetails} /> */}
    </Body>
  </Page>
);

export default Cv;
