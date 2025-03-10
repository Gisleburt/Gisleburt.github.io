use crate::components::{HamburgerContainer, Open, Scrollbar, Title};
use crate::utils::make_string_safe;
use dioxus::prelude::*;

const FAVICON: Asset = asset!("/assets/favicon.ico");
const SITE_CSS: Asset = asset!("/assets/site.css");
const RESET_CSS: Asset = asset!("/assets/reset.css");

#[derive(Copy, Clone, PartialEq, Eq)]
pub enum ShownModal {
    None,
    Splash,
    Open,
}

pub static MODAL_SIGNAL: GlobalSignal<ShownModal> = Global::new(|| ShownModal::None);

#[component]
pub fn Page(title: String, children: Element) -> Element {
    let safe_title = make_string_safe(&title);
    let id = format!("page-{safe_title}",);

    rsx! {
        document::Link { rel: "icon", href: FAVICON }
        document::Link { rel: "stylesheet", href: RESET_CSS }
        document::Link { rel: "stylesheet", href: SITE_CSS }
        HamburgerContainer { }
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
        Scrollbar { }
        Open { }
    }
}
