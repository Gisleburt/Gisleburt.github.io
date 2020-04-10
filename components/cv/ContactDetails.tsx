import React from 'react';

export interface ContactDetail {
  label: string;
  value: string;
  href?: string;
}

interface ContactDetailsProps {
  contactDetails: ContactDetail[];
}

const ContactDetails = ({ contactDetails }: ContactDetailsProps): JSX.Element => (
  <div>
    <h2>Contact Details</h2>
    <dl>
      {contactDetails.map(({ label, value, href }) => (
        <React.Fragment key={label}>
          <dt>{label}</dt>
          <dd>{href ? <a href={href}>{value}</a> : value}</dd>
        </React.Fragment>
      ))}
    </dl>
  </div>
);

export default ContactDetails;
