import React from 'react';
import { Content } from '../../types/domain';
import { isFreeText, isRoleDescription, isSkills } from '../../types/domainPredicates';
import WorkHistoryItem from '../cv/WorkHistoryItem';
import Skills from '../cv/Skills';
import H2 from '../html/H2';
import HtmlSection from '../html/Section';

type SectionContentTypes = Content.FreeText | Content.RoleDescription | Content.Skills;

type SectionContentProps = {
  content: SectionContentTypes;
};

const SectionContent = ({ content }: SectionContentProps) => {
  if (isFreeText(content)) {
    return (
      <>
        {content.text.split(/[\r\n]+/).map((p, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={i}>{p}</p>
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
    <HtmlSection>
      <H2>{section.title}</H2>
      {section.content.map((content) => (
        <SectionContent key={content.id} content={content} />
      ))}
    </HtmlSection>
  );
};

export default Section;
