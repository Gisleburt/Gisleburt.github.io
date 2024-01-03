use dioxus::prelude::*;

pub(super) fn Skills(cx: Scope) -> Element {
    cx.render(rsx! {
        section { id: "skills",
            h2 { "Skills" }
            dl {
                dt { "Leadership" }
                dd { "Architecture, Tech Evangelist, People Management, Coaching, Mentoring, Triage" }
                dt { "Languages" }
                dd { "TypeScript, Rust, JavaScript, Node.js, MySql/Maria, Postgres" }
                dt { "Quality Control" }
                dd { "GitLab CI, GitHub Actions, rustdoc, Jest, ESLint, Prettier, Mocha, mdBook" }
                dt { "Methodology" }
                dd { "Agile, TDD, BDD, DDD, Cross Team Collaboration, Stakeholder Management" }
                dt { "Frameworks" }
                dd { "Next.js, Express, Actix Web, Diesel, Dioxus, React, Rocket" }
                dt { "Source Management" }
                dd { "Git, GitHub, GitLab,  Cargo, Crates.io, NPM, Yarn, Docker Hub" }
                dt { "WebOps" }
                dd { "Kubernetes, GKE, GCP, Docker, AWS, Linux" }
            }
        }
    })
}
