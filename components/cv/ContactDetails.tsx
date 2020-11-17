import React from 'react';
import styled from 'styled-components';
import H2 from '../html/H2';
import Section from '../html/Section';
import { Content } from '../../types/domain';

const ContactDetailsSection = styled(Section)`
  dl {
    display: grid;
    grid-template-columns: max-content auto max-content auto;
    padding: 1rem 0 0;
  }

  dt {
    font-weight: 700;
    padding: 0 0.5rem 0 0;
  }

  a,
  a:hover,
  a:visited {
    color: #a7b8c9;
  }
`;
ContactDetailsSection.displayName = 'ContactDetailsSection';

type Props = {
  contactDetails: Content.ContactDetails;
};

const ContactDetails = ({ contactDetails }: Props): JSX.Element => (
  <ContactDetailsSection>
    <H2>{contactDetails.title}</H2>
    <dl>
      {contactDetails.details.map(({ label, value, href }) => (
        <React.Fragment key={label}>
          <dt>{label}</dt>
          <dd>{href ? <a href={href}>{value}</a> : value}</dd>
        </React.Fragment>
      ))}
    </dl>
  </ContactDetailsSection>
);

export default ContactDetails;
