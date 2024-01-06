use dioxus::prelude::*;
use indoc::indoc;

pub(super) fn Presentations(cx: Scope) -> Element {
    cx.render(rsx! {
        section { id: "presentations",
            h2 { "Presentations" }
            p {
                indoc! { "
                    Throughout my career I've delivered a number of presentations and more recently,
                    some of my more recent ones are here to see
                " }
            }
            ul {
                li {
                    a { href: "https://www.danielmason.com/intro-to-rust/", "Intro to Rust" }
                    " "
                    indoc! { "
                        is a quick introduction to the Rust programming language, whats supposed to
                        be difficult, what's so amazing about it and how to get started. I presented
                        this at Beamery and started a Rust slack group to help people on their journey.
                    " }
                }
                li {
                    a { href: "https://www.danielmason.com/rust-in-the-frontend/", "Rust in the Frontend" }
                    " "
                    indoc! { "
                        built on my Intro to Rust presentation to talk about the options for using
                        Rust in web frontends. It covered a handful of frameworks, common
                        misconceptions, why you might want to use it, why you probably shouldn't...
                        and why you might anyway. Fun fact, the site you're looking at right now
                        was built in Rust.
                    " }
                }
                li {
                    a { href: "https://www.danielmason.com/why-i-dont-mock/#/intro", "Why I don't mock" }
                    " "
                    indoc! { "
                        is a discussion of why mocks in tests are bad, offers an alternate approach
                        and shows how that alternative can be used outside of simple testing.
                    " }
                }
            }
        }
    })
}
