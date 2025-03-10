use crate::components::{HamburgerContainer, Open, Scrollbar, Title};
use crate::utils::make_string_safe;
use dioxus::prelude::*;

const FAVICON: Asset = asset!("/assets/favicon.ico");
const SITE_CSS: Asset = asset!("/assets/site.css");
const RESET_CSS: Asset = asset!("/assets/reset.css");
const SOCIAL_PREVIEW: Asset = asset!("/assets/social-preview.png");

#[derive(Copy, Clone, PartialEq, Eq)]
pub enum ShownModal {
    None,
    Splash,
    Open,
}

pub static MODAL_SIGNAL: GlobalSignal<ShownModal> = Global::new(|| ShownModal::None);

fn create_website_title(title: &str) -> String {
    if title == "Daniel // Mason" {
        "Daniel // Mason".to_string()
    } else {
        format!("Daniel // Mason - {title}")
    }
}

#[component]
pub fn Page(title: String, children: Element) -> Element {
    let safe_title = make_string_safe(&title);
    let id = format!("page-{safe_title}",);
    let web_title = create_website_title(&title);
    let social_description =
        "Learn about the awesomeness that is Daniel // Mason, his projects and presentations";

    rsx! {
        document::Link { rel: "icon", href: FAVICON }
        document::Link { rel: "stylesheet", href: RESET_CSS }
        document::Link { rel: "stylesheet", href: SITE_CSS }
        document::Title { "{web_title}" }
        document::Meta { property: "og:title", content: "{web_title}" }
        document::Meta { property: "og:image", content: "https://danielmason.com{SOCIAL_PREVIEW}" }
        document::Meta { property: "og:description", content: "{social_description}" }
        document::Meta { property: "og:site_name", content: "Daniel // Mason" }
        document::Meta { property: "twitter:title", content: "{web_title}" }
        document::Meta { property: "twitter:card", content: "summary_large_image" }
        document::Meta { property: "twitter:description", content: "{social_description}" }
        document::Meta { property: "twitter:image:alt", content: "Preview of danielmason.com" }

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
