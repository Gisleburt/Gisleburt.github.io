use dioxus::prelude::*;

#[component]
pub fn NavBar() -> Element {
    rsx! {
        nav {
            ol {
                li { "File" }
                li { "Edit" }
                li { "View" }
                li { "Search" }
                li { "Run" }
                li { "Debug" }
                li { "Options" }
                li { "Help" }
            }
        }
    }
}
