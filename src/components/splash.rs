use crate::components::page::{ShownModal, MODAL_SIGNAL};
use dioxus::prelude::*;

#[component]
pub fn Splash() -> Element {
    let show_class = (MODAL_SIGNAL == ShownModal::Splash)
        .then(|| "show")
        .unwrap_or_default();

    rsx! {
        div {
            class: "splash modal {show_class}",
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
                        onclick: move |_| *MODAL_SIGNAL.write() = ShownModal::None,
                        "Press Enter to see the Survival Guide"
                    }
                }
            }
            div {
                p {
                    a {
                        class: "button",
                        href: "#",
                        onclick: move |_| *MODAL_SIGNAL.write() = ShownModal::None,
                        "Press ESC to clear this dialog box"
                    }
                }
            }
        }
    }
}
