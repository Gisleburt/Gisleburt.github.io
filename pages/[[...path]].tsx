import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Contentful from '../content/content-source/contentful';

type Props = {
  path: string[];
};

const Home = ({ path = [] }: Props): JSX.Element => <pre>You are on the path /{path?.join('/')}</pre>;

export default Home;

type Params = {
  path: string[];
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const path = params?.path || [];
  return {
    props: {
      path,
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
