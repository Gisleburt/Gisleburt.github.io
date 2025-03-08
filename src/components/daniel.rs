use dioxus::prelude::*;

#[component]
pub fn Daniel() -> Element {
    rsx! {
        span {
            class: "daniel",
            "Daniel // Mason"
        }
    }
}
