#![allow(non_snake_case)]

use dioxus::prelude::*;
use indoc::indoc;

mod home;
mod nav;
mod presentations;

use home::*;
use presentations::*;

fn WhoIsDaniel(cx: Scope) -> Element {
    cx.render(rsx! {
        section { id: "who-is-daniel",
            h2 { "Who is Daniel" }
            p { "Hello, I'm Daniel and I'm a software engineer!" }
            p {
                indoc! { "
                    I'd describe myself as a generalist, having worked across multiple industries
                    and multiple languages. I'm passionate about technology but whats technology
                    without people.
                " }
            }
        }
    })
}

fn Skills(cx: Scope) -> Element {
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

fn Achievements(cx: Scope) -> Element {
    cx.render(rsx! {
        section { id: "achievements", h2 { "Achievements" } }
    })
}

fn PersonalInterests(cx: Scope) -> Element {
    cx.render(rsx! {
        section { id: "personal-interests", h2 { "Personal Interests" } }
    })
}

pub fn App(cx: Scope) -> Element {
    cx.render(rsx! {
        Home {}
        WhoIsDaniel {}
        Skills {}
        Presentations {}
        Achievements {}
        PersonalInterests {}
    })
}
