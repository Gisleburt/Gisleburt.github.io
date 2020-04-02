import React from 'react';
import WorkHistoryItem from './WorkHistory';

const FullWorkHistory = (): JSX.Element => (
  <div>
    <h2>Experience</h2>
    <WorkHistoryItem company="Triptease Ltd" title="Senior Software Engineer" startDate={new Date('2019-10')}>
      <p>
        Daniel joined the Retargeting team at Triptease, which was just coming out of its greenfield MVP phase, and
        moving to sustaining growth, optimisation and a steady release of features. Work was almost always performed in
        pairs, often with another engineer, but sometimes with design, data science or project management. Daniel
        thrived in this, learning, teaching and producing higher quality work than either person could have produced on
        their own.
      </p>
      <p>
        Retargeting APIs were written in http4js, with the frontend in Preact, or for actual ad content, in pure html
        and css. Daniel proposed and implemented “responsive” ads, which fixed a bug where ad networks would load the
        wrong size for an ad, but also made it quicker to build ads in the future. Other tooling included a client
        facing dashboard written in React. Daniel also did a lot of work in BigQuery and Looker which helped the team
        plan and self organise.
      </p>
      <p>
        In addition to his work duties Daniel took part in the career coaching framework both as a coach and a coachee.
        Daniel was also a regular at Triptease’s Coding Dojo, initially joining because there was an interest in
        learning Rust and he was invited to teach, but sticking around as someone eager to learn.
      </p>
    </WorkHistoryItem>

    <WorkHistoryItem
      company="Apolitical Group Ltd"
      title="Senior Software Engineer"
      startDate={new Date('2017-11')}
      endDate={new Date('2019-10')}
    >
      <p>
        When he arrived at Apolitical, the platform was a custom Wordpress theme. Daniel planned, designed, and
        delivered the Kubernetes infrastructure that allowed Apolitical to grow from around a 1000 users when he
        started, over 30,000 when he left. Daniel also designed the pipelines and processes that allow engineers to
        quickly pick up the right work, and confidently deploy their code to live.
      </p>
      <p>
        New features on the platform were built in microservices using Express (JS) and later Actix Web (Rust) on the
        backend and React on the frontend.
      </p>
      <p>
        Daniel mentored Apolitical’s two juniors. The first, a Ruby developer who Daniel helped to skill up in modern
        JavaScript, and is now the internal authority on much of our frontend work, and is especially keen on improving
        our testing tools. The second, an engineer straight out of a bootcamp who Daniel taught Rust, and is now the
        internal authority on Apolitical’s Rust services.
      </p>
    </WorkHistoryItem>

    <WorkHistoryItem
      company="MOO Print Ltd"
      title="Software Engineer"
      startDate={new Date('2016-05')}
      endDate={new Date('2017-11')}
    >
      <p>
        Daniel was hired for his PHP skills, but ended up working almost entirely on the frontend. He helped take a
        greenfield project from the drawing board and into production. This meant Daniel had to learn a lot about modern
        JavaScript development very quickly, but before he left he was teaching others how to develop applications on
        the frontend, and was an influential member of the Frontend guild.
      </p>
      <p>
        Production capability and code quality are both very important to Daniel, and to enable this in his team he
        iterated
        through two different pipeline systems, first Jenkins later moving to GitLab CI. Now code is deployed to a live
        environment whenever a merge to master occurs.
      </p>
      <p>
        As with Apolitical, Daniel’s biggest achievement at MOO was coaching a junior. Here he was given the opportunity
        to
        coach someone from a non-engineering team and help them move to Junior Software Engineer over the course of two
        months. During that time they spent one day a week, pairing and creating a small React app from scratch, and at
        the
        end she joined his team and was immediately a significant contributor.
      </p>
      <p>Further details can be given on request.</p>
    </WorkHistoryItem>

    <WorkHistoryItem
      company="The Foundry Visionmongers"
      title="Web Developer"
      startDate={new Date('2014-08')}
      endDate={new Date('2016-05')}
    >
      <p>
        Daniel was the sole in-house developer on the Made With Mischief web services. He introduced high quality
        testing and added an API to provide facilities such as auto updates for the desktop app.
      </p>

      <p>Further details can be given on request.</p>
    </WorkHistoryItem>


    <WorkHistoryItem
      company="Loft Digital"
      title="LAMP Developer"
      startDate={new Date('2011-09')}
      endDate={new Date('2014-08')}
    >
      <p>
        Daniel worked with clients to deliver web services. Daniel’s biggest achievement was working on-site at the
        Homeless World Cup in Poznan. Daniel provided extra value to both the sports and media teams. The role involved
        developing new features, as well as diagnosing and resolving problems that developed during the event.
      </p>

      <p>Further details can be given on request.</p>
    </WorkHistoryItem>
  </div>
);

export default FullWorkHistory;
