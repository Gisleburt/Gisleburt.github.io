import React from 'react';

interface PersonalStatementProps {
  statement: string[];
}

const PersonalStatement = ({ statement }: PersonalStatementProps): JSX.Element => (
  <section>
    <h2>Personal Statement</h2>
    {statement.map((paragraph) => (
      <p key={paragraph.length}>{paragraph}</p>
    ))}
  </section>
);

export default PersonalStatement;
