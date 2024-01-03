use dioxus::prelude::*;

pub(super) fn PersonalInterests(cx: Scope) -> Element {
    cx.render(rsx! {
        section { id: "personal-interests", h2 { "Personal Interests" } }
    })
}
