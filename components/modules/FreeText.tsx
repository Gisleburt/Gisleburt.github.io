import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Content } from '../../types/domain';

type Props = {
  freeText: Content.FreeText;
};

const FreeText = ({ freeText }: Props): JSX.Element => <ReactMarkdown>{freeText.text}</ReactMarkdown>;

export default FreeText;
