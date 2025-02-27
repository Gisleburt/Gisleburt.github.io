use crate::components::page::{ShownModal, MODAL_SIGNAL};
use dioxus::prelude::*;

#[component]
pub fn Open() -> Element {
    let show_class = (MODAL_SIGNAL == ShownModal::Open)
        .then(|| "show")
        .unwrap_or_default();

    rsx! {
        section {
            class: "open modal {show_class}",
            div {
                h2 { "Open" }
                div {
                    label { "File Name: " input { type: "input" } }
                }
                div {
                    "D:\\"
                }
                div {
                    class: "lists",
                    div {
                        h2 { "Files" }
                        ul {
                            li { "Daniel Mason CV.pdf" }
                        }
                    }
                    div {
                        h2 { "Dirs/Drives" }
                        ul {
                            li { "D:\\" }
                        }
                    }
                }
                div {
                    class: "buttons",
                    a {
                        class: "button",
                        href: "#",
                        onclick: move |_| *MODAL_SIGNAL.write() = ShownModal::None,
                        "OK"
                    }
                    a {
                        class: "button",
                        href: "#",
                        onclick: move |_| *MODAL_SIGNAL.write() = ShownModal::None,
                        "Cancel"
                    }
                }
            }
        }
    }
}
