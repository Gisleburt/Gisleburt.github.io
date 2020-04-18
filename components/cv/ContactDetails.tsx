import React from 'react';
import Section from '../html/Section';
import H2 from '../html/H2';

export interface ContactDetail {
  label: string;
  value: string;
  href?: string;
}

interface ContactDetailsProps {
  contactDetails: ContactDetail[];
}

const ContactDetails = ({ contactDetails }: ContactDetailsProps): JSX.Element => (
  <Section>
    <H2>Contact Details</H2>
    <dl>
      {contactDetails.map(({ label, value, href }) => (
        <React.Fragment key={label}>
          <dt>{label}</dt>
          <dd>{href ? <a href={href}>{value}</a> : value}</dd>
        </React.Fragment>
      ))}
    </dl>
  </Section>
);

export default ContactDetails;
