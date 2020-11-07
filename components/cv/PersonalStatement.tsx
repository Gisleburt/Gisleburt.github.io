import React from 'react';
import Section from '../html/Section';
import H2 from '../html/H2';

interface PersonalStatementProps {
  statement: string[];
}

const PersonalStatement = ({ statement }: PersonalStatementProps): JSX.Element => (
  <Section>
    <H2>Personal Statement</H2>
    {statement.map((paragraph) => (
      <p key={paragraph.length}>{paragraph}</p>
    ))}
  </Section>
);

export default PersonalStatement;
