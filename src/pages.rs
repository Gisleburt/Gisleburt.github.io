mod index;
mod presentations;

use dioxus::prelude::*;
pub use index::Index;
use presentations::Presentations;

#[derive(Routable, Clone, PartialEq)]
pub enum Route {
    // Any routes with no dynamic segments in your router will be included in the static routes list
    #[route("/")]
    Index {},
    #[route("/presentations")]
    Presentations {},
}

pub static PAGES: &[&str] = &["presentations", "interests"];
