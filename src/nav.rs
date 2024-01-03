use dioxus::prelude::*;

#[derive(Props)]
pub(super) struct NavItemProps<'a> {
    href: &'a str,
    children: Element<'a>,
}

pub(super) fn NavItem<'a>(cx: Scope<'a, NavItemProps<'a>>) -> Element {
    cx.render(rsx! {
        li { a { href: "{cx.props.href}", &cx.props.children }}
    })
}

#[derive(Props)]
pub(super) struct NavProps<'a> {
    children: Element<'a>,
}

pub(super) fn Nav<'a>(cx: Scope<'a, NavProps<'a>>) -> Element {
    cx.render(rsx! {
        nav {
            ol {
                &cx.props.children
            }
        }
    })
}
