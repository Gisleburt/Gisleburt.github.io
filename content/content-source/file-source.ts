import { ContentSource, Cv } from '../types';

const title = 'Daniel // Mason';

const personalStatement = [
  `Daniel has two software development related degrees and is staying in practice through personal projects and
  providing additional value to his employer.`,

  `Daniel constantly looks at how new technologies and techniques can be used to improve the quality of his work,
  however he always weighs potential gains against required investment. At Triptease, he encouraged and helped people
  learning Rust, but cautioned about making the jump to it too early; the potential for resource optimisation did not
  outweigh the cost of people learning a new technology. At Apolitical however, Daniel evangelised kubernetes, docker,
  Node and Rust and coached colleagues in their use. At MOO, he evangelised Docker and CD Pipelines to increase
  developer confidence and code quality, as well as pushing for more testing and quality control.`,

  `Daniel can pick up new languages, frameworks and techniques very quickly, and loves to do so. He constantly looks
  for new ways to improve on what he's already doing.`,
];

const skillsDescription = `Daniel is a skilled engineer, with experience in a wide range of languages, tools and
  frameworks. This is an incomplete list of technologies Daniel has been practicing in the last year:`;

const skillsListCategories: Cv.SkillsListCategory[] = [
  {
    category: 'Leadership:',
    skills: ['Architect', 'tech evangelist', 'agile', 'mentor', 'coach', 'triage'],
  },
  {
    category: 'Languages:',
    skills: ['Rust', 'JavaScript', 'TypeScript', 'ES6+', 'PHP', 'MySql/Maria', 'Postgres'],
  },
  {
    category: 'Quality Control:',
    skills: ['GitLab CI', 'CircleCI', 'Travis', 'Jest', 'Cucumber', 'ESLint', 'Mocha', 'Chai', 'Sinon', 'PhpUnit'],
  },
  {
    category: 'Frameworks:',
    skills: ['Actix Web', 'Diesel', 'Warp', 'Next.js', 'Express', 'React', 'Express', 'Http4Js', 'Rocket'],
  },
  {
    category: 'Source Management:',
    skills: ['Git', 'GitHub', 'GitLab', 'Cargo', 'Crates.io', 'NPM', 'Yarn', 'Composer', 'Packagist', 'Docker Hub'],
  },
  {
    category: 'WebOps:',
    skills: ['Kubernetes', 'GKE', 'GCP', 'Docker', 'Vagrant', 'AWS', 'DO', 'StackPoint'],
  },
];

export const contactDetails: Cv.ContactDetail[] = [
  {
    label: 'Mobile',
    value: '07838 200176',
    href: 'tel:07838 200176',
  },
  {
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/danieljamesmason/',
    href: 'https://www.linkedin.com/in/danieljamesmason/',
  },
  {
    label: 'Email',
    value: 'daniel@danielmason.com',
    href: 'mailto:daniel@danielmason.com',
  },
  {
    label: 'GitHub',
    value: 'https://github.com/gisleburt',
    href: 'https://github.com/gisleburt',
  },
];

const workHistory: Cv.WorkHistoryItem[] = [
  {
    company: 'Triptease Ltd',
    title: 'Senior Software Engineer',
    startDate: '2019-10',
    description: [
      `Daniel joined the Retargeting team at Triptease, which was just coming out of its greenfield MVP phase, and
      moving to sustaining growth, optimisation and a steady release of features. Work was almost always performed in
      pairs, often with another engineer, but sometimes with design, data science or project management. Daniel thrived
      in this, learning, teaching and producing higher quality work than either person could have produced on their
      own.`,

      `Retargeting APIs were written in http4js, with the frontend in Preact, or for actual ad content, in pure html
      and css. Daniel proposed and implemented “responsive” ads, which fixed a bug where ad networks would load the
      wrong size for an ad, but also made it quicker to build ads in the future. Other tooling included a client facing
      dashboard written in React. Daniel also did a lot of work in BigQuery and Looker which helped the team plan and
      self organise.`,

      `In addition to his work duties Daniel took part in the career coaching framework both as a coach and a coachee.
      Daniel was also a regular at Triptease’s Coding Dojo, initially joining because there was an interest in learning
      Rust and he was invited to teach, but sticking around as someone eager to learn.`,
    ],
  },
  {
    company: 'Apolitical Group Ltd',
    title: 'Senior Software Engineer',
    startDate: '2017-11',
    endDate: '2019-10',
    description: [
      `When he arrived at Apolitical, the platform was a custom Wordpress theme. Daniel planned, designed, and
      delivered the Kubernetes infrastructure that allowed Apolitical to grow from around a 1000 users when he started,
      over 30,000 when he left. Daniel also designed the pipelines and processes that allow engineers to quickly pick up
      the right work, and confidently deploy their code to live.`,

      `New features on the platform were built in microservices using Express (JS) and later Actix Web (Rust) on the
      backend and React on the frontend.`,

      `Daniel mentored Apolitical’s two juniors. The first, a Ruby developer who Daniel helped to skill up in modern
      JavaScript, and is now the internal authority on much of our frontend work, and is especially keen on improving
      our testing tools. The second, an engineer straight out of a bootcamp who Daniel taught Rust, and is now the
      internal authority on Apolitical’s Rust services.`,
    ],
  },

  {
    company: 'MOO Print Ltd',
    title: 'Software Engineer',
    startDate: '2016-05',
    endDate: '2017-11',
    description: [
      `Daniel was hired for his PHP skills, but ended up working almost entirely on the frontend. He helped take a
      greenfield project from the drawing board and into production. This meant Daniel had to learn a lot about modern
      JavaScript development very quickly, but before he left he was teaching others how to develop applications on
      the frontend, and was an influential member of the Frontend guild.`,

      `Production capability and code quality are both very important to Daniel, and to enable this in his team he 
      iterated through two different pipeline systems, first Jenkins later moving to GitLab CI. Now code is deployed to
      a live environment whenever a merge to master occurs.`,

      `As with Apolitical, Daniel’s biggest achievement at MOO was coaching a junior. Here he was given the opportunity
      to coach someone from a non-engineering team and help them move to Junior Software Engineer over the course of two
      months. During that time they spent one day a week, pairing and creating a small React app from scratch, and at
      the end she joined his team and was immediately a significant contributor.`,

      'Further details can be given on request.',
    ],
  },
  {
    company: 'The Foundry Visionmongers',
    title: 'Web Developer',
    startDate: '2014-08',
    endDate: '2016-05',
    description: [
      `Daniel was the sole in-house developer on the Made With Mischief web services. He introduced high quality
      testing and added an API to provide facilities such as auto updates for the desktop app.`,

      'Further details can be given on request.',
    ],
  },
  {
    company: 'Loft Digital',
    title: 'LAMP Developer',
    startDate: '2011-09',
    endDate: '2014-08',

    description: [
      `Daniel worked with clients to deliver web services. Daniel’s biggest achievement was working on-site at the
      Homeless World Cup in Poznan. Daniel provided extra value to both the sports and media teams. The role involved
      developing new features, as well as diagnosing and resolving problems that developed during the event.`,

      'Further details can be given on request.',
    ],
  },
];

const FileSource: ContentSource = {
  getCv: async () => ({
    contactDetails,
    personalStatement,
    skillsDescription,
    skillsListCategories,
    title,
    workHistory,
  }),
};

export default FileSource;
