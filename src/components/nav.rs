use crate::components::page::{ShownModal, MODAL_SIGNAL};
use crate::utils::make_string_safe;
use dioxus::prelude::*;

#[component]
pub fn TouchNavWrapper(title: String, children: Element) -> Element {
    let safe_title = make_string_safe(&title);
    let id = format!("touch-wrapper-{safe_title}");
    rsx! {
        Fragment {
            key: "{safe_title}",
            label { for: id.clone(), "{title}" }
            input { type: "checkbox", id: id }
            {children}
        }
    }
}

#[component]
pub fn HamburgerContainer() -> Element {
    rsx! {
        div {
            class: "nav-container",
            TouchNavWrapper {
                title: "Menu",
                NavBar {}
            }
        }
    }
}

#[component]
pub fn NavBar() -> Element {
    rsx! {
        nav {
            class: "main-nav",
            ol {
                li {
                    TouchNavWrapper {
                        title: "File",
                        FileNav {}
                    }
                }
                li {
                    TouchNavWrapper {
                        title: "Talks",
                        PresentationNav {}
                    }
                }
                li {
                    TouchNavWrapper {
                        title: "Projects",
                        ProjectsNav {}
                    }
                }
                li {
                    TouchNavWrapper {
                        title: "Interests",
                        InterestsNav {}
                    }
                }
                li {
                    TouchNavWrapper {
                        title: "Help",
                        HelpNav {}
                    }
                }
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
                li { a { href: "/", "New" } }
                li { a { href: "#", onclick: move |_| { *MODAL_SIGNAL.write() = ShownModal::Open; }, "Open..." } }
            }
            ol {
                 li { a {
                    href: "#",
                    onclick: |_| { document::eval("window.print();"); },
                    "Print..."
                } }
            }
            // ol {
            //      li { a { href: "#", "Exit" } }
            // }
        }
    }
}

#[component]
fn PresentationNav() -> Element {
    rsx! {
        nav {
            class: "sub-nav",
            ol {
                li { a { href: "/presentations", "Overview" } }
            }
            ol {
                li { a { href: "https://www.danielmason.com/intro-to-rust/", "Intro to Rust..." } }
                li { a { href: "https://www.danielmason.com/rust-in-the-frontend/", "Rust in the Frontend..." } }
                li { a { href: "https://www.danielmason.com/why-i-dont-mock/#/intro", "Why I don't mock..." } }
            }
        }
    }
}

#[component]
fn InterestsNav() -> Element {
    rsx! {
        nav {
            class: "sub-nav",
            ol {
                li { a { href: "/personal-interests/hackathons", "Hackathons" } }
                li { a { href: "/personal-interests/ttrpgs", "TTRPGs" } }
                li { a { href: "/personal-interests/homelab", "Homelab" } }
            }
        }
    }
}

#[component]
fn ProjectsNav() -> Element {
    rsx! {
        nav {
            class: "sub-nav",
            ol {
                li { a { href: "https://fios-quest.com", "Fio's Quest..." } }
            }
        }
    }
}

#[component]
fn HelpNav() -> Element {
    rsx! {
        nav {
            class: "sub-nav",
            // ol {
            //     li { a { href: "/about/index", "Index" } }
            //     li { a { href: "/about/contents", "Contents" } }
            // }
            ol {
                li { a { href: "/about", "About" } }
            }
        }
    }
}
