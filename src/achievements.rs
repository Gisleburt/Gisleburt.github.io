use dioxus::prelude::*;

pub(super) fn Achievements(cx: Scope) -> Element {
    cx.render(rsx! {
        section { id: "achievements", h2 { "Achievements" } }
    })
}
