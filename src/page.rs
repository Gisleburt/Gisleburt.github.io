use crate::nav::NavBar;
use crate::title::Title;
use dioxus::prelude::*;

const FAVICON: Asset = asset!("/assets/favicon.ico");
const SITE_CSS: Asset = asset!("/assets/site.css");
const RESET_CSS: Asset = asset!("/assets/reset.css");

#[component]
pub fn Page(title: String, children: Element) -> Element {
    rsx! {
        document::Link { rel: "icon", href: FAVICON }
        document::Link { rel: "stylesheet", href: RESET_CSS }
        document::Link { rel: "stylesheet", href: SITE_CSS }
        NavBar {}
        article {
            Title {
                title: "Daniel // Mason"
            }
            {children}
        }
    }
}
