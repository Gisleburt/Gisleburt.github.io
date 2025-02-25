use dioxus::prelude::*;

#[component]
pub fn Open(show_open_modal_signal: Signal<bool>) -> Element {
    let show_class = show_open_modal_signal().then(|| "show").unwrap_or("");

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
                        onclick: move |_| show_open_modal_signal.set(false),
                        "OK"
                    }
                    a {
                        class: "button",
                        href: "#",
                        onclick: move |_| show_open_modal_signal.set(false),
                        "Cancel"
                    }
                }
            }
        }
    }
}
