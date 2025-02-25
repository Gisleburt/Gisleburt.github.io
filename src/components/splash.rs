use dioxus::prelude::*;

#[component]
pub fn Splash() -> Element {
    rsx! {
        div {
            class: "splash modal show",
            div {
                p { "Welcome to Daniel // Mason"}
                p {
                    "Copyright (C) Daniel // Mason, 2025."
                    br {}
                    "All rights reserved."
                }
                p {
                    a {
                        class: "button",
                        href: "#",
                        "Press Enter to see the Survival Guide"
                    }
                }
            }
            div {
                p {
                    a {
                        class: "button",
                        href: "#",
                        "Press ESC to clear this dialog box"
                    }
                }
            }
        }
    }
}
