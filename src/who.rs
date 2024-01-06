use dioxus::prelude::*;
use indoc::indoc;

fn HardSkills(cx: Scope) -> Element {
    cx.render(rsx! {
        ul {
            li { "Rust" }
            li { "TypeScript" }
            li { "Kubernetes " }
            li { "Test Driven Development" }
            li { "Behavioral Driven Development" }
            li { "Domain Driven Development" }
            li { "Continuos Integration" }
            li { "Continuos Deployment" }
        }
    })
}

fn SoftSkills(cx: Scope) -> Element {
    cx.render(rsx! {
        ul {
            li { "Stakeholder Collaboration" }
            li { "Coaching" }
            li { "Mentoring" }
            li { "Presentations" }
            li { "Teaching" }
            li { "Tech Evangelism" }
            li { "Optimizing Ways of Working" }
            li { "Leadership and Management" }
            li { "Software Architecture" }
        }
    })
}


pub(super) fn WhoIsDaniel(cx: Scope) -> Element {
    cx.render(rsx! {
        article { id: "who-is-daniel",
            h2 { "Who is Daniel" }
            p { "Hello, I'm Daniel and I'm a software engineer!" }
            p {
                indoc! { "
                    I'd describe myself as a generalist, having worked across multiple industries
                    and multiple languages. My specialist areas today are:
                " }
            }
            HardSkills {}
            p { "BUT! That's not why you should hire me." }
            p {
                "I love technology but we don't build tech for tech's sake, we build it "
                i { "for" }
                " and "
                i { "with" }
                " people."
            }
            p { "These are the skills I value the most" }
            SoftSkills {}
        }
    })
}
