mod about;
mod index;
mod personal_interests;
mod presentations;

use about::About;
use dioxus::prelude::*;
pub use index::Index;
use personal_interests::{Hackathons, Homelab, Ttrpgs};
use presentations::Presentations;

#[derive(Routable, Clone, PartialEq)]
pub enum Route {
    // Any routes with no dynamic segments in your router will be included in the static routes list
    #[route("/")]
    Index {},
    #[route("/presentations")]
    Presentations {},
    #[route("/about")]
    About {},
    #[nest("/personal-interests")]
    #[route("/hackathons")]
    Hackathons {},
    #[route("/ttrpgs")]
    Ttrpgs {},
    #[route("/homelab")]
    Homelab {},
}
