#![allow(non_snake_case)]

use dioxus::prelude::*;

mod home;
mod nav;

use home::*;

fn WhoIsDaniel(cx: Scope) -> Element {
    cx.render(rsx! {
        h2 {id: "who-is-daniel", "Who is Daniel"}
    })
}

fn Skills(cx: Scope) -> Element {
    cx.render(rsx! {
        h2 {id: "skills", "Skills"}
    })
}

fn Presentations(cx: Scope) -> Element {
    cx.render(rsx! {
        h2 {id: "presentations", "Presentations"}
    })
}

fn Achievements(cx: Scope) -> Element {
    cx.render(rsx! {
        h2 {id: "achievements", "Achievements"}
    })
}

fn PersonalInterests(cx: Scope) -> Element {
    cx.render(rsx! {
        h2 {id: "personal-interests", "Personal Interests"}
    })
}

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
