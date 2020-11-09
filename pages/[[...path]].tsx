import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Contentful from '../content/content-source/contentful';
import { Pages } from '../content/types';
import Cv from '../components/pages/cv';

type Props = {
  page: Pages.OpaquePage;
};

// eslint-disable-next-line no-underscore-dangle
const isCv = (page: Pages.OpaquePage): page is Pages.OpaqueCvPage => page.__TYPE__ === 'Cv';

const Home = ({ page }: Props): JSX.Element => {
  if (!page) {
    return <></>;
  }
  if (isCv(page)) {
    return <Cv cv={page} />;
  }
  throw new Error('Unsupported page');
};

export default Home;

type Params = {
  path: string[];
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const path = params?.path || [];
  const contentful = Contentful.fromEnvironment();
  const page = await contentful.getPage(`/${path.join('/')}`);
  return {
    props: {
      page,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const contentful = Contentful.fromEnvironment();
  const pages = await contentful.getPaths();

  const paths = pages
    .map((page) => page.path.split('/').filter((part) => !part))
    .map((path) => ({ path }))
    .map((params) => ({ params }));

  return {
    paths,
    fallback: true,
  };
};
