import React from 'react';
import styled from 'styled-components';
import H2 from '../html/H2';
import Section from '../html/Section';

export interface ContactDetail {
  label: string;
  value: string;
  href?: string;
}

interface ContactDetailsProps {
  contactDetails: ContactDetail[];
}

const ContactDetailsSection = styled(Section)`
  dl {
    display: grid;
    grid-template-columns: max-content auto max-content auto;
    padding: 1rem 0 0;
  }
  
  dt {
    font-weight: 700;
    padding: 0 .5rem 0 0;
  }
  
  a, a:hover, a:visited {
    color: #a7b8c9;
  }
`;
ContactDetailsSection.displayName = 'ContactDetailsSection';

const ContactDetails = ({ contactDetails }: ContactDetailsProps): JSX.Element => (
  <ContactDetailsSection>
    <H2>Contact Details</H2>
    <dl>
      {contactDetails.map(({ label, value, href }) => (
        <React.Fragment key={label}>
          <dt>{label}</dt>
          <dd>{href ? <a href={href}>{value}</a> : value}</dd>
        </React.Fragment>
      ))}
    </dl>
  </ContactDetailsSection>
);

export default ContactDetails;
