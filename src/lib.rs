mod nav;
mod page;
mod splash;
mod title;

use crate::page::Page;
use crate::splash::Splash;
use dioxus::prelude::*;

#[component]
pub fn App() -> Element {
    rsx! { Router::<Route> {} }
}

#[component]
pub fn Index() -> Element {
    rsx! {
        Page {
            title: "Daniel // Mason",
            Splash {}
        }
    }
}

#[derive(Routable, Clone, PartialEq)]
pub enum Route {
    // Any routes with no dynamic segments in your router will be included in the static routes list
    #[route("/")]
    Index {},
}
