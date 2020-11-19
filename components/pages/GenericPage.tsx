import React from 'react';
import { Content } from '../../types/domain';
import Reset from '../css/Reset';
import Global from '../css/Global';
import SiteHead from '../SiteHead';
import Body from '../modules/Body';
import Page from '../modules/Page';
import { isCv, isFreeText, isNavBar, isSection } from '../../types/domainPredicates';
import Cv from './Cv';
import Section from '../modules/Section';
import NavBar from '../modules/NavBar';
import FreeText from '../modules/FreeText';

type GenericPageContentProps = {
  content: Content.GenericPageContent;
};

const GenericPageContent = ({ content }: GenericPageContentProps): JSX.Element => {
  if (isCv(content)) {
    return <Cv cv={content} />;
  }
  if (isSection(content)) {
    return <Section section={content} />;
  }
  if (isNavBar(content)) {
    return <NavBar navBar={content} />;
  }
  if (isFreeText(content)) {
    return <FreeText freeText={content} />;
  }
  throw new Error(`Unknown type passed as CV content: ${JSON.stringify(content)}`);
};

type Props = {
  page: Content.GenericPage;
};

const GenericPage = ({ page }: Props): JSX.Element => (
  <Page>
    <Reset />
    <Global />
    <Body>
      <SiteHead title={page.title} />
      {page.content.map((content) => (
        <GenericPageContent key={content.id} content={content} />
      ))}
    </Body>
  </Page>
);

export default GenericPage;
