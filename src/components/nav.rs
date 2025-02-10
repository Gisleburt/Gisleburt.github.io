use dioxus::prelude::*;

#[component]
pub fn NavBar() -> Element {
    rsx! {
        nav {
            class: "main-nav",
            ol {
                li {
                    a {
                        href: "#",
                        "File"
                    }
                    FileNav {}
                }
                li {
                    a {
                        href: "#",
                        "Presentations"
                    }
                    PresentationNav {}
                }
                li { "Personal Interests" }
                li { "Search" }
                li { "Run" }
                li { "Debug" }
                li { "Options" }
                li { "Help" }
            }
        }
    }
}

#[component]
fn FileNav() -> Element {
    rsx! {
        nav {
            class: "sub-nav",
            ol {
                 li { a { href: "#", "New" } }
                 li { a { href: "#", "Open..." } }
                 li { a { href: "#", "Save" } }
                 li { a { href: "#", "Save As" } }
            }
            ol {
                 li { a { href: "#", "Print..." } }
            }
            ol {
                 li { a { href: "#", "Exit" } }
            }
        }
    }
}

#[component]
fn PresentationNav() -> Element {
    rsx! {
        nav {
            class: "sub-nav",
            ol {
                li { a { href: "/presentations", "All" } }
            }
            ol {
                li { a { href: "https://www.danielmason.com/intro-to-rust/", "Intro to Rust" } }
                li { a { href: "https://www.danielmason.com/rust-in-the-frontend/", "Rust in the Frontend" } }
                li { a { href: "https://www.danielmason.com/why-i-dont-mock/#/intro", "Why I don't mock" } }
            }
        }
    }
}
