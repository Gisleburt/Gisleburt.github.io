mod components;
mod pages;

pub use crate::pages::Route;
use dioxus::prelude::*;

#[component]
pub fn App() -> Element {
    rsx! { Router::<Route> {} }
}
