use crate::components::page::{ShownModal, MODAL_SIGNAL};
use crate::utils::make_string_safe;
use dioxus::logger::tracing;
use dioxus::prelude::*;
use std::string::ToString;

#[derive(Clone, PartialEq)]
struct Download {
    file: Asset,
    filename: &'static str,
}

const DANIEL_MASON_CV: Download = Download {
    file: asset!("/assets/downloads/Daniel Mason CV.pdf"),
    filename: "Daniel Mason CV.pdf",
};

const DANIEL_MASON_GPG: Download = Download {
    file: asset!("/assets/downloads/danielmason.gpg.pub"),
    filename: "danielmason.gpg.pub",
};

#[component]
fn FileSelector(
    download: &'static Download,
    mut download_signal: Signal<Option<&'static Download>>,
) -> Element {
    let id = make_string_safe(download.filename);
    let filename = download.filename;
    rsx! {
        li {
            class: "file-select",
            input {
                type: "radio",
                id: "{id}",
                name: "file-select",
                value: "{filename}",
                checked: false,
                onchange: move |_| {
                    download_signal.set(Some(download));
                }
            }
            label { for: "{id}", "{filename}" }
        }
    }
}

#[component]
pub fn Open() -> Element {
    let show_class = (MODAL_SIGNAL == ShownModal::Open)
        .then(|| "show")
        .unwrap_or_default();

    let download_signal: Signal<Option<&'static Download>> = use_signal(|| None);
    let download_value: Option<&Download> = download_signal();
    let download_disabled_class = download_value
        .is_none()
        .then(|| "disabled")
        .unwrap_or_default();
    let download_link = download_value
        .map(|download| format!("{}", download.file))
        .unwrap_or_else(|| "#".to_string());
    let filename = download_value
        .map(|download| download.filename)
        .unwrap_or_else(|| "");

    rsx! {
        section {
            class: "open modal {show_class}",
            div {
                h2 { "Open" }
                div {
                    label {
                        "File Name: "
                        input {
                            type: "input",
                            disabled: download_signal.read().is_none(),
                            value: "{filename}"
                        }
                    }
                }
                div {
                    "D:\\"
                }
                div {
                    class: "lists",
                    div {
                        h2 { "Files" }
                        ul {
                            FileSelector { download: &DANIEL_MASON_CV, download_signal }
                            FileSelector { download: &DANIEL_MASON_GPG, download_signal }
                        }
                    }
                    div {
                        h2 { "Dirs/Drives" }
                        ul {
                            li { "D:\\" }
                        }
                    }
                }
                div {
                    class: "buttons",
                    a {
                        class: "button {download_disabled_class}",
                        download: filename,
                        href: download_link,
                        "OK"
                    }
                    a {
                        class: "button",
                        href: "#",
                        onclick: move |_| *MODAL_SIGNAL.write() = ShownModal::None,
                        "Cancel"
                    }
                }
            }
        }
    }
}
