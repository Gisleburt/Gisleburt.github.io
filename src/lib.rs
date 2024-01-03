#![allow(non_snake_case)]

use dioxus::prelude::*;

mod home;
mod nav;
mod presentations;
mod skills;
mod who;
mod achievements;
mod interests;

use home::Home;
use presentations::Presentations;
use skills::Skills;
use who::WhoIsDaniel;
use achievements::Achievements;
use interests::PersonalInterests;

pub fn App(cx: Scope) -> Element {
    cx.render(rsx! {
        Home {}
        WhoIsDaniel {}
        Skills {}
        Presentations {}
        Achievements {}
        PersonalInterests {}
    })
}
