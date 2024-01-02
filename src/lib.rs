#![allow(non_snake_case)]

use dioxus::prelude::*;

mod nav;

use nav::*;

fn Contact(cx: Scope) -> Element {
    cx.render(rsx! {
      Nav {
            NavItem {href: "https://github.com/gisleburt", "GitHub"}
            NavItem {href: "/Daniel Mason - CV With Matrix - 2024.pdf", "CV"}
            NavItem {href: "https://www.linkedin.com/in/danieljamesmason/", "LinkedIn"}
        }
    })
}

fn Navigation(cx: Scope) -> Element {
    cx.render(rsx! {
      Nav {
            NavItem {href: "#", "Home"}
            NavItem {href: "#who-is-daniel", "Who is Daniel"}
            NavItem {href: "#skills", "Skills"}
            NavItem {href: "#presentations", "Presentations"}
            NavItem {href: "#achievements", "Achievements"}
            NavItem {href: "#personal-interests", "Personal Interests"}
        }
    })
}
fn Home(cx: Scope) -> Element {
    cx.render(rsx! {
        h1 {"Daniel // Mason"}
        Contact {}
        Navigation {}
    })
}

pub fn App(cx: Scope) -> Element {
    cx.render(rsx! {
        Home {}
    })
}
