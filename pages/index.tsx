import React from 'react';
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


const Home = (): JSX.Element => (
  <div className="container">
    <StyleReset />
    <SiteHead title={title} />
    <Title>{title}</Title>
    <PersonalStatement statement={personalStatement} />
    <Skills skillsCategories={skillsListCategories} skillsDescription={skillsDescription} />
    <WorkHistory history={workHistory} />
    <ContactDetails contactDetails={contactDetails} />
  </div>
);

export default Home;
