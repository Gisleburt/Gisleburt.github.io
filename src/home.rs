use dioxus::prelude::*;

use super::nav::*;

pub(super) fn Contact(cx: Scope) -> Element {
    cx.render(rsx! {
        Nav { class: "contact",
            NavItem { href: "https://github.com/gisleburt", "GitHub" }
            NavItem {
                download: "Daniel Mason - CV - Abstract.pdf",
                href: "/cv/Daniel%20Mason%20CV%20-%20abstract.pdf",
                "CV"
            }
            NavItem { href: "https://www.linkedin.com/in/danieljamesmason/", "LinkedIn" }
        }
    })
}

pub(super) fn MainNav(cx: Scope) -> Element {
    cx.render(rsx! {
        Nav { class: "main",
            NavItem { href: "#home", "Home" }
            NavItem { href: "#who-is-daniel", "Who is Daniel" }
            NavItem { href: "#presentations", "Presentations" }
            NavItem { href: "#personal-interests", "Personal Interests" }
        }
    })
}

pub(super) fn Home(cx: Scope) -> Element {
    cx.render(rsx! {
        section { id: "home",
            h1 {
                "Daniel "
                span { "// Mason" }
            }
            Contact {}
        }
        MainNav {}
    })
}
