import React from 'react';

interface TitleProps {
  children: string;
}

const Title = ({ children }: TitleProps): JSX.Element => (
  <h1>{children}</h1>
);

export default Title;
