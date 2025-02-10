use crate::components::{Page, Splash};
use dioxus::prelude::*;

#[component]
pub fn Index() -> Element {
    rsx! {
        Page {
            title: "Daniel // Mason",
            Splash {}
        }
    }
}
