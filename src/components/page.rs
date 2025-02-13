use crate::components::{NavBar, Scrollbar, Title};
use dioxus::prelude::*;

const FAVICON: Asset = asset!("/assets/favicon.ico");
const SITE_CSS: Asset = asset!("/assets/site.css");
const RESET_CSS: Asset = asset!("/assets/reset.css");

#[component]
pub fn Page(title: String, children: Element) -> Element {
    let id = format!("page-{}", title.to_ascii_lowercase());
    rsx! {
        document::Link { rel: "icon", href: FAVICON }
        document::Link { rel: "stylesheet", href: RESET_CSS }
        document::Link { rel: "stylesheet", href: SITE_CSS }
        NavBar {}
        article {
            id: id,
            Title {
                title: title
            }
            div {
                class: "page-container",
                {children}
            }
        }
        Scrollbar {}
    }
}
