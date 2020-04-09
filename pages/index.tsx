import React from 'react';
import SiteHead from '../components/SiteHead';
import ContactDetails from '../components/ContactDetails';
import WorkHistory from '../components/WorkHistory';
import Skills from '../components/Skills';
import PersonalStatement from '../components/PersonalStatement';
import Title from '../components/Title';
import StyleReset from '../components/StyleReset';
import {
  contactDetails, skillsDescription, skillsListCategories, workHistory,
} from '../content/content';


const Home = (): JSX.Element => (
  <div className="container">
    <StyleReset />
    <SiteHead />
    <Title />
    <PersonalStatement />
    <Skills skillsCategories={skillsListCategories} skillsDescription={skillsDescription} />
    <WorkHistory history={workHistory} />
    <ContactDetails contactDetails={contactDetails} />
  </div>
);

export default Home;
