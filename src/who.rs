use dioxus::prelude::*;
use indoc::indoc;

pub(super) fn WhoIsDaniel(cx: Scope) -> Element {
    cx.render(rsx! {
        article { id: "who-is-daniel",
            h2 { "Who is Daniel" }
            p { "Hello, I'm Daniel and I'm a software engineer!" }
            p {
                indoc! { "
                    I'd describe myself as a generalist, having worked across multiple industries
                    and multiple languages. I'm passionate about technology but whats technology
                    without people.
                " }
            }
        }
    })
}
