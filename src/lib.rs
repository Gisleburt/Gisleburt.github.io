mod page;

use page::cv::experience::Experience;
use page::cv::experience::ExperienceProps;
use page::cv::experience_detail::ExperienceDetailProps;
use page::cv::simple_section::SimpleSection;
use page::cv::skills_list::SkillList;
use page::cv::skills_list::SkillsList;

use yew::prelude::*;

#[function_component(App)]
pub fn app() -> Html {
    let skills: Vec<SkillList> = vec![
        (
            "Leadership".to_string(),
            vec![
                "Architecture".to_string(),
                "tech evangelist".to_string(),
                "agile coach".to_string(),
                "mentor".to_string(),
                "triage".to_string(),
            ],
        )
            .into(),
        (
            "Languages".to_string(),
            vec![
                "Rust".to_string(),
                "JavaScript".to_string(),
                "Node".to_string(),
                "TypeScript".to_string(),
                "Flow".to_string(),
                "ES6 +".to_string(),
                "PHP".to_string(),
                "MySql / Maria".to_string(),
                "Postgres".to_string(),
            ],
        )
            .into(),
        (
            "Quality Control".to_string(),
            vec![
                "GitLab CI".to_string(),
                "CircleCI".to_string(),
                "Travis".to_string(),
                "Jest".to_string(),
                "Cucumber(JS + PHP)".to_string(),
                "ESLint".to_string(),
                "Mocha".to_string(),
                "Chai".to_string(),
                "Sinon".to_string(),
                "PhpUnit".to_string(),
            ],
        )
            .into(),
        (
            "Frameworks".to_string(),
            vec![
                "Actix Web".to_string(),
                "Diesel".to_string(),
                "Yew".to_string(),
                "Next.js".to_string(),
                "Express".to_string(),
                "React".to_string(),
                "Express".to_string(),
                "Http4Js".to_string(),
                "Rocket".to_string(),
            ],
        )
            .into(),
        (
            "Source Management".to_string(),
            vec![
                "Git".to_string(),
                "GitHub".to_string(),
                "GitLab".to_string(),
                "Cargo".to_string(),
                "Crates.io".to_string(),
                "NPM".to_string(),
                "Yarn".to_string(),
                "Composer".to_string(),
                "Packagist".to_string(),
                "Docker Hub".to_string(),
            ],
        )
            .into(),
        (
            "WebOps".to_string(),
            vec![
                "Kubernetes".to_string(),
                "GKE".to_string(),
                "GCP".to_string(),
                "Docker".to_string(),
                "Vagrant".to_string(),
                "AWS".to_string(),
                "DO".to_string(),
                "StackPoint".to_string(),
            ],
        )
            .into(),
    ];

    let personal_statement = r#"
        Daniel has two software development related degrees and is staying in practice through personal projects and providing additional value to his employer. Daniel excels at Node and Rust but has a wealth of other skills too.
        Daniel constantly looks at how new technologies and techniques can be used to improve the quality of his work, however, he always weighs potential gains against required investment. At Peloton, Daniel introduced the concept of structured content, empowering copy editors to create new pages with minimal engineering input and significantly simplifying code. At Triptease, he encouraged and helped people wanting to learn Rust, but cautioned about making the jump to it too early; the potential for resource optimisation did not outweigh the cost of people learning a new technology. At Apolitical, however, Daniel evangalised kubernetes, docker, Node and Rust and coached colleagues in their use. At MOO, he evangelised Docker and CD Pipelines to increase developer confidence and code quality, as well as pushing for more testing and quality control.
        Daniel can pick up new languages, frameworks and techniques very quickly, and loves to do so. He constantly looks for new ways to improve on what he's already doing.
    "#.to_owned();

    let peloton_em = ExperienceDetailProps {
        company: "Peloton Interactive Inc".to_string(),
        title: "Engineering Manager".to_string(),
        start: "June 2021".to_string(),
        end: None,
        detail: "Now Moving into a full time management role allowed Daniel to focus on building out his team and optimising its structure and processes.\n\nThis started with hiring three new engineers, and bringing in four contractors. This provided the scale we needed to begin delivering our bigger initiatives. Daniel then split the team into two sub-squads, delegating some of the leadership to his two more senior engineers. The squads could then specialise on internationalisation and localisation tasks separately. Daniel’s biggest efforts have been put into helping his reports pursue career goals by tying their development areas into Pelotons career ladder and the businesses long term ambitions. Daniels has focused on cultivating an environment that allows his team members to succeed and grow.".to_string(),
    };

    let peloton_el = ExperienceDetailProps {
        company: "Peloton Interactive Inc".to_string(),
        title: "Engineering Lead".to_string(),
        start: "September 2020".to_string(),
        end: Some("June 2021".to_string()),
        detail: r#"Daniel joined Peloton's new international ecommerce team, with two reports. Initially work mostly focused on adding small, market specific changes inside a monolithic frontend React app. The first significant project was the global financing page, and this is when he noticed a problem. The requirement was to add a single page with next to no functionality, but it took two and a half developers a full two weeks to deliver it. Daniel identified several problems in the development process that caused this, in particular, existing code was rarely reusable, and every page had to be tailor made by engineers. Daniel presented a demo using “structured content” that allowed copy editors to build pages themselves, using a handful of components. This idea was then used to deliver the Australia Launch page,which was ultimately delivered by the other engineers, but gave them a much higher degree of confidence in their work and allowed the product owner to add pages herself without additional engineering support. This has since been adopted by another team bringing the same functionality to the wider monolithic project."#.to_string(),
    };

    let triptease = ExperienceDetailProps {
        company: "Triptease Ltd".to_string(),
        title: "Senior Software Engineer".to_string(),
        start: "October 2019".to_string(),
        end: Some("September 2020".to_string()),
        detail: r#"Daniel joined the Retargeting team at Triptease, which was just coming out of its greenfield MVP phase, and moving to sustaining growth, optimisation and a steady release of features. Work was almost always performed in pairs, not just with engineers but also design, data science or project management.
Retargeting APIs were written in http4js using Node and TypeScript, with the frontend in React, Preact, or for actual ad content, in pure html and css. Daniel proposed and implemented “responsive” ads, to both speed up development and fix a bug caused by ad networks misreporting ad size.
In addition to his work duties Daniel took part in the career coaching framework both as a coach and a coachee. Daniel was also a regular at Triptease’s Coding Dojo."#.to_string(),
    };

    let apolitical = ExperienceDetailProps {
        company: "Apolitical Group Ltd".to_string(),
        title: "Senior Software Engineer".to_string(),
        start: "November 2017".to_string(),
        end: Some("October 2019".to_string()),
        detail: r#"Daniel joined the Retargeting team at Triptease, which was just coming out of its greenfield MVP phase, and moving to sustaining growth, optimisation and a steady release of features. Work was almost always performed in pairs, not just with engineers but also design, data science or project management.
Retargeting APIs were written in http4js using Node and TypeScript, with the frontend in React, Preact, or for actual ad content, in pure html and css. Daniel proposed and implemented “responsive” ads, to both speed up development and fix a bug caused by ad networks misreporting ad size.
In addition to his work duties Daniel took part in the career coaching framework both as a coach and a coachee. Daniel was also a regular at Triptease’s Coding Dojo."#.to_string(),
    };

    let moo = ExperienceDetailProps {
        company: "MOO Print Ltd".to_string(),
        title: "Software Engineer".to_string(),
        start: "May 2016".to_string(),
        end: Some("November 2017".to_string()),
        detail: r#"Daniel was hired for his PHP skills, but ended up working almost entirely on the frontend. He helped take a greenfield project from the drawing board and into production. Daniel also improved production capability.
As with Apolitical, Daniel’s biggest achievement at MOO was coaching a junior engineer. Here he was given the opportunity to coach someone from a non-engineering team and help them move to Junior Software Engineer over the course of two months. During that time they spent one day a week, pairing and creating a small React app from scratch, and at the end she joined his team and was immediately a significant contributor."#.to_string(),
    };

    let foundry = ExperienceDetailProps {
        company: "The Foundry Visionmongers".to_string(),
        title: "Web Developer".to_string(),
        start: "October 2014".to_string(),
        end: Some("May 2016".to_string()),
        detail: r#"Daniel was the sole in-house developer on the Made With Mischief web services. He introduced high quality testing and added an API to provide facilities such as auto updates for the desktop app."#.to_string(),
    };

    let loft = ExperienceDetailProps {
        company: "Loft Digital".to_string(),
        title: "LAMP Developer".to_string(),
        start: "September 2011".to_string(),
        end: Some("October 2014".to_string()),
        detail: r#"Daniel worked with clients to deliver web services. Daniel’s biggest achievement was working onsite at the Homeless World Cup in Poznan. Daniel provided extra value to both the sports and media teams. The role involved developing new features, as well as diagnosing and resolving problems that developed during the event."#.to_string(),
    };

    let experience = ExperienceProps {
        title: "Experience".to_string(),
        blurb: "Further details can be given on request".to_string(),
        details: vec![
            peloton_em, peloton_el, triptease, apolitical, moo, foundry, loft,
        ],
    };

    html! {
        <>
            <h1>{ "Daniel Mason" }</h1>
            <SimpleSection
                title="Personal Statement"
                body={personal_statement}
            />
            <SkillsList
                title="Skills"
                blurb="Daniel is a skilled engineer and leader, with experience in a wide range of languages, tools and practices. This is an incomplete list of technologies Daniel is competent with:"
                list={skills}
            />
            <Experience ..experience />
        </>
    }
}
