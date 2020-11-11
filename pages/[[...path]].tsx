import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Contentful from '../content/content-source/contentful';
import { Pages } from '../types/domain';
import Cv from '../components/pages/cv';

type Props = {
  page?: Pages.OpaquePage;
};

// eslint-disable-next-line no-underscore-dangle
const isCv = (page: Pages.OpaquePage): page is Pages.OpaqueCvPage => page.__TYPE__ === 'Cv';

const Home = ({ page }: Props): JSX.Element => {
  if (!page) {
    return <>No path</>;
  }
  if (isCv(page)) {
    return <Cv cv={page} />;
  }
  throw new Error('Unsupported page');
};

export default Home;

type Params = {
  path: string | string[];
};

const normalizePath = (path: string | string[]): string[] => {
  if (typeof path === 'string') {
    return path.split('/').filter((part) => !!part);
  }
  return path;
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const path = normalizePath(params?.path || []);
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
    .map((page) => normalizePath(page.path))
    .map((path) => ({ path }))
    .map((params) => ({ params }));

  return {
    paths,
    fallback: false,
  };
};
