import React from 'react';
import Image from 'next/image';
import { Content } from '../../types/domain';

type Props = {
  image: Content.Image;
};

const SectionImage = ({ image }: Props): JSX.Element => (
  <Image src={image.url} alt={image.description} height={image.height} width={image.width} />
);

export default SectionImage;
