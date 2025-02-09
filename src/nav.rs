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
                li { "Edit" }
                li { "View" }
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
