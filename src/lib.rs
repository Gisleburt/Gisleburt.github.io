#![allow(non_snake_case)]

use dioxus::prelude::*;

// create a component that renders a div with the text "Hello, world!"
pub fn App(cx: Scope) -> Element {
    cx.render(rsx! {
        div {
            "Hello, world!"
        }
    })
}
