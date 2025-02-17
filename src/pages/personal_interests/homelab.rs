use crate::components::Page;
use dioxus::prelude::*;

#[component]
pub fn Homelab() -> Element {
    rsx! {
        Page {
            title: "Homelab",
            section {
                h2 { "A what now?" }
            }
            section {
                h2 { "Hardware" }
            }
            section {
                h2 { "Software" }
            }
            section {
                h2 { "What's next?" }
            }
        }
    }
}
