import React from 'react';
import { Content } from '../../types/domain';
import { isFreeText, isRoleDescription, isSkills } from '../../types/domainPredicates';
import WorkHistoryItem from '../cv/WorkHistoryItem';
import Skills from '../cv/Skills';

type SectionContentTypes = Content.FreeText | Content.RoleDescription | Content.Skills;

type SectionContentProps = {
  content: SectionContentTypes;
};

const SectionContent = ({ content }: SectionContentProps) => {
  if (isFreeText(content)) {
    return (
      <>
        {content.text.split(/[\r\n]+/).map((p) => (
          <p>{p}</p>
        ))}
      </>
    );
  }
  if (isRoleDescription(content)) {
    return <WorkHistoryItem key={`${content.business}-${content.role}`} {...content} />;
  }
  if (isSkills(content)) {
    return <Skills skills={content} />;
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
        <SectionContent content={content} />
      ))}
    </section>
  );
};

export default Section;
