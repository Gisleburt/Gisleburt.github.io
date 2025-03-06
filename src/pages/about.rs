use crate::components::Page;
use dioxus::prelude::*;

#[component]
pub fn About() -> Element {
    rsx! {
        Page {
            title: "About",
            p { "Welcome to my quirky little homepage, what the heck is going on here?!" }
            p { "I'm Daniel, and I'm a software engineer. I've always loved computers and, well, I'm quite old ☺︎. Back when I was a child in the late 80s and early 90s the kids IDE of choice was a program called QBASIC. What you're looking at now is my homage to that piece of software." }
            p { "I have basically no design skills, but mocking up someone else's design is definitely within my skills set, so this is my way of thanking the people who created a piece of software that got so many of us into programming to begin with. Thank you!" }
        }
    }
}
