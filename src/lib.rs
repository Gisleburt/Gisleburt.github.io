mod page;

use page::cv::experience_detail::ExperienceDetail;
use page::cv::skills_list::SkillsList;
use page::cv::skills_list::SkillList;

use yew::prelude::*;

#[function_component(App)]
pub fn app() -> Html {
    let skills: Vec<SkillList> = vec![
        ("Leadership".to_string(), vec!["Architecture".to_string(), "tech evangelist".to_string(), "agile coach".to_string(), "mentor".to_string(), "triage".to_string()]).into(),
        ("Languages".to_string(), vec!["Rust".to_string(), "JavaScript".to_string(), "Node".to_string(), "TypeScript".to_string(), "Flow".to_string(), "ES6 +".to_string(), "PHP".to_string(), "MySql / Maria".to_string(), "Postgres".to_string()]).into(),
        ("Quality Control".to_string(), vec!["GitLab CI".to_string(), "CircleCI".to_string(), "Travis".to_string(), "Jest".to_string(), "Cucumber(JS + PHP)".to_string(), "ESLint".to_string(), "Mocha".to_string(), "Chai".to_string(), "Sinon".to_string(), "PhpUnit".to_string()]).into(),
        ("Frameworks".to_string(), vec!["Actix Web".to_string(), "Diesel".to_string(), "Yew".to_string(), "Next.js".to_string(), "Express".to_string(), "React".to_string(), "Express".to_string(), "Http4Js".to_string(), "Rocket".to_string()]).into(),
        ("Source Management".to_string(), vec!["Git".to_string(), "GitHub".to_string(), "GitLab".to_string(), "Cargo".to_string(), "Crates.io".to_string(), "NPM".to_string(), "Yarn".to_string(), "Composer".to_string(), "Packagist".to_string(), "Docker Hub".to_string()]).into(),
        ("WebOps".to_string(), vec!["Kubernetes".to_string(), "GKE".to_string(), "GCP".to_string(), "Docker".to_string(), "Vagrant".to_string(), "AWS".to_string(), "DO".to_string(), "StackPoint".to_string()]).into(),
    ];

    html! {
        <div>
            <SkillsList
                title="Skills"
                blurb="Daniel is a skilled engineer and leader, with experience in a wide range of languages, tools and practices. This is an incomplete list of technologies Daniel is competent with:"
                list={skills}
            />
            <ExperienceDetail
                company="Peloton"
                title="Engineering Manager"
                start="June 2021"
                detail="Now Moving into a full time management role allowed Daniel to focus on building out his team and optimising its structure and processes.\n\nThis started with hiring three new engineers, and bringing in four contractors. This provided the scale we needed to begin delivering our bigger initiatives. Daniel then split the team into two sub-squads, delegating some of the leadership to his two more senior engineers. The squads could then specialise on internationalisation and localisation tasks separately. Daniel’s biggest efforts have been put into helping his reports pursue career goals by tying their development areas into Pelotons career ladder and the businesses long term ambitions. Daniels has focused on cultivating an environment that allows his team members to succeed and grow."
            />
        </div>

    }
}
