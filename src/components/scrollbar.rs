use dioxus::prelude::*;

#[component]
pub fn Scrollbar() -> Element {
    rsx! {
        div {
            class: "scrollbar",
            ""
        }
    }
}
