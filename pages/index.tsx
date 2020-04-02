import React from 'react';
import SiteHead from '../components/SiteHead';
import ContactDetails from '../components/ContactDetails';
import FullWorkHistory from '../components/FullWorkHistory';
import Skills from '../components/Skills';
import PersonalStatement from '../components/PersonalStatement';
import Title from '../components/Title';


const Home = (): JSX.Element => (
  <div className="container">
    <SiteHead />
    <Title />
    <PersonalStatement />
    <Skills />
    <FullWorkHistory />
    <ContactDetails />
  </div>
);

export default Home;
