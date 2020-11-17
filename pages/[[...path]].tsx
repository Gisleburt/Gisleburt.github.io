import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Contentful from '../content/contentful';
import { Content } from '../types/domain';
import Cv from '../components/pages/Cv';
import { isCv } from '../types/domainPredicates';

type Props = {
  page?: Content.Page;
};

const Page = ({ page }: Props): JSX.Element => {
  if (!page) {
    return <>No path</>;
  }
  if (isCv(page.content)) {
    return <Cv cv={page.content} />;
  }
  throw new Error('Unsupported page');
};

export default Page;

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
