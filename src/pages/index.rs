use crate::components::page::{ShownModal, MODAL_SIGNAL};
use crate::components::{Page, Splash};
use dioxus::prelude::*;

#[component]
pub fn Index() -> Element {
    use_memo(move || {
        *MODAL_SIGNAL.write() = ShownModal::Splash;
    });

    rsx! {
        Page {
            title: "Daniel // Mason",
            Splash {}
        }
    }
}
