use dioxus::prelude::*;

#[component]
pub fn Title(title: String) -> Element {
    rsx! {
        h1 { "{title}" }
    }
}
