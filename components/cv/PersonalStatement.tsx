import React from 'react';

interface PersonalStatementProps {
  statement: string[];
}

const PersonalStatement = ({ statement }: PersonalStatementProps): JSX.Element => (
  <div>
    <h2>Personal Statement</h2>
    {statement.map((paragraph) => <p key={paragraph.length}>{paragraph}</p>)}
  </div>
);

export default PersonalStatement;
