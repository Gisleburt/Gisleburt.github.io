import React from 'react';

const Skills = (): JSX.Element => (
  <div>
    <h2>Skills</h2>
    <p>
      Daniel is a skilled engineer, with experience in a wide range of languages. This is an incomplete list of
      technologies Daniel has been practicing in the last year:
    </p>
    <dl>
      <dt>Leadership:</dt>
      <dd>Architect, tech evangelist, agile, mentor, coach, triage</dd>
      <dt>Languages:</dt>
      <dd>Rust, JavaScript, TypeScript, ES6+, PHP, MySql/Maria, Postgres</dd>
      <dt>Quality Control:</dt>
      <dd>GitLab CI, CircleCI, Travis, Jest, Cucumber (JS+PHP), ESLint, Mocha, Chai, Sinon, PhpUnit</dd>
      <dt>Frameworks:</dt>
      <dd>Actix Web, Diesel, Warp, Next.js, Express, React, Express, Http4Js, Rocket</dd>
      <dt>Source Management:</dt>
      <dd>Git, GitHub, GitLab, Cargo, Crates.io, NPM, Yarn, Composer, Packagist, Docker Hub</dd>
      <dt>WebOps:</dt>
      <dd>Kubernetes, GKE, GCP, Docker, Vagrant, AWS, DO, StackPoint</dd>
    </dl>
  </div>
);

export default Skills;
