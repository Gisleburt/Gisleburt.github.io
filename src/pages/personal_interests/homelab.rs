use crate::components::Page;
use dioxus::prelude::*;

#[component]
pub fn Homelab() -> Element {
    rsx! {
        Page {
            title: "Homelab",
        }
    }
}
