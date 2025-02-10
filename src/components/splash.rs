use dioxus::prelude::*;

#[component]
pub fn Splash() -> Element {
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
