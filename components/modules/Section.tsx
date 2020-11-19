import React from 'react';
import { Content } from '../../types/domain';
import { isFreeText, isImage, isRoleDescription, isSkills } from '../../types/domainPredicates';
import WorkHistoryItem from '../cv/WorkHistoryItem';
import Skills from '../cv/Skills';
import SectionImage from './SectionImage';
import FreeText from './FreeText';

type SectionContentProps = {
  content: Content.SectionContent;
};

const SectionContent = ({ content }: SectionContentProps) => {
  if (isFreeText(content)) {
    return <FreeText freeText={content} />;
  }
  if (isRoleDescription(content)) {
    return <WorkHistoryItem key={`${content.business}-${content.role}`} {...content} />;
  }
  if (isSkills(content)) {
    return <Skills skills={content} />;
  }
  if (isImage(content)) {
    return <SectionImage image={content} />;
  }
  throw new Error(`Unknown type passed as Section content: ${JSON.stringify(content)}`);
};

type Props = {
  section: Content.Section;
};

const Section = ({ section }: Props): JSX.Element => {
  return (
    <section>
      <h2>{section.title}</h2>
      {section.content.map((content) => (
        <SectionContent key={content.id} content={content} />
      ))}
    </section>
  );
};

export default Section;
