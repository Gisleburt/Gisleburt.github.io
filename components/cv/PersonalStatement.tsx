import React from 'react';
import Section from '../html/Section';

interface PersonalStatementProps {
  statement: string[];
}

const PersonalStatement = ({ statement }: PersonalStatementProps): JSX.Element => (
  <Section>
    <h2>Personal Statement</h2>
    {statement.map((paragraph) => <p key={paragraph.length}>{paragraph}</p>)}
  </Section>
);

export default PersonalStatement;
