use dioxus::prelude::*;

#[derive(Props)]
pub(super) struct NavItemProps<'a> {
    href: &'a str,
    download: Option<&'a str>,
    children: Element<'a>,
}

pub(super) fn NavItem<'a>(cx: Scope<'a, NavItemProps<'a>>) -> Element {
    cx.render(rsx! {
        li {
            a { href: "{cx.props.href}", download: cx.props.download, &cx.props.children }
        }
    })
}

#[derive(Props)]
pub(super) struct NavProps<'a> {
    children: Element<'a>,
    class: Option<&'a str>,
}

pub(super) fn Nav<'a>(cx: Scope<'a, NavProps<'a>>) -> Element {
    cx.render(rsx! {
        nav {
            class: cx.props.class,
            ol { &cx.props.children }
        }
    })
}
