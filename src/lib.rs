#![allow(non_snake_case)]

use dioxus::prelude::*;

mod home;
mod interests;
mod nav;
mod presentations;
mod who;

use home::Home;
use interests::PersonalInterests;
use presentations::Presentations;
use who::WhoIsDaniel;

pub fn App(cx: Scope) -> Element {
    cx.render(rsx! {
        Home {}
        WhoIsDaniel {}
        Presentations {}
        PersonalInterests {}
    })
}
