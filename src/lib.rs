use dioxus::prelude::*;

const FAVICON: Asset = asset!("/assets/favicon.ico");
const SITE_CSS: Asset = asset!("/assets/site.css");
const RESET_CSS: Asset = asset!("/assets/reset.css");

#[component]
pub fn App() -> Element {
    rsx! { Router::<Route> {} }
}

#[component]
pub fn Index() -> Element {
    rsx! {
        document::Link { rel: "icon", href: FAVICON }
        document::Link { rel: "stylesheet", href: RESET_CSS }
        document::Link { rel: "stylesheet", href: SITE_CSS }
        NavBar {}
        article {
            Title {
                title: "Daniel // Mason"
            }
            Splash {}
        }
    }
}

#[component]
fn NavBar() -> Element {
    rsx! {
        nav {
            ol {
                li { "File" }
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
fn Title(title: String) -> Element {
    rsx! {
        h1 { "{title}" }
    }
}

#[component]
fn Splash() -> Element {
    rsx! {
        div {
            class: "splash",
            div {
                p { "Welcome to Daniel // Mason"}
                p {
                    "Copyright (C) Daniel // Mason, 2025."
                    br {}
                    "All rights reserved."
                }
                p {
                    a {
                        href: "#",
                        "Press Enter to see the Survival Guide"
                    }
                }
            }
            div {
                p {
                    a {
                        href: "#",
                        "Press ESC to clear this dialog box"
                    }
                }
            }
        }
    }
}

#[derive(Routable, Clone, PartialEq)]
pub enum Route {
    // Any routes with no dynamic segments in your router will be included in the static routes list
    #[route("/")]
    Index {},
}
