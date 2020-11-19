import React from 'react';
import styled from 'styled-components';

import { Content } from '../../types/domain';

const ContactDetailsSection = styled.section`
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
    <h2>{contactDetails.title}</h2>
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
