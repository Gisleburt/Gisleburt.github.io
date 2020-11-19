import React from 'react';
import { Content } from '../../types/domain';

type Props = {
  freeText: Content.FreeText;
};

const FreeText = ({ freeText }: Props): JSX.Element => (
  <>
    {freeText.text.split(/[\r\n]+/).map((p, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <p key={i}>{p}</p>
    ))}
  </>
);

export default FreeText;
