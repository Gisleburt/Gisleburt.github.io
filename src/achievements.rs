use dioxus::prelude::*;

pub(super) fn Achievements(cx: Scope) -> Element {
    cx.render(rsx! {
        article { id: "achievements", h2 { "Achievements" } }
    })
}
