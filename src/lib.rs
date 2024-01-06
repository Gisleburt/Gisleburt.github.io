#![allow(non_snake_case)]

use dioxus::prelude::*;

mod home;
mod nav;
mod presentations;
mod who;
mod interests;

use home::Home;
use presentations::Presentations;
use who::WhoIsDaniel;
use interests::PersonalInterests;

pub fn App(cx: Scope) -> Element {
    cx.render(rsx! {
        Home {}
        WhoIsDaniel {}
        Presentations {}
        PersonalInterests {}
    })
}
