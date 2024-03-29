use dioxus::prelude::*;
use indoc::indoc;

fn DungeonsAndDragons(cx: Scope) -> Element {
    cx.render(rsx! {
        article {
            h3 { "Dungeons and Dragons" }
            p {
                "I love Table Top Role Playing Games, especially running the game as a Game Master (GM)."
            }
            p {
                indoc! { "
                    TTRPGs are a unique medium for collaborative story telling. While the GM might be using a prebuilt
                    world and story, or even have come up with their own, reacting to the players decisions and adapting
                    the story and the world to their actions is crucial.
                " }
            }
            p {
                indoc! { "
                    In my opinion, a good GM is a lot like a good manager, helping people make the best use of their
                    role, guiding everyone in the same direction, and making sure everyone involved feels the impact
                    of their contribution.
                " }
            }
        }
    })
}

fn Homelab(cx: Scope) -> Element {
    cx.render(rsx! {
        article {
            h3 { "Homelab" }
            p {
                indoc! { "
                    Just for fun, I run my own kubernetes cluster of Raspberry Pis and NUCs that I use to run cloud
                    services at home. This includes a variety of tools such as, a local DNS server, certificate
                    manager, monitoring tools, NAS, GitLab Runners, Smart Home services and even game servers.
                " }
            }
        }
    })
}

fn Hackathons(cx: Scope) -> Element {
    cx.render(rsx! {
        article {
            h3 { "Hackathons, Game Jams and Coding Challenges" }
            p { "I try to take part in hackathons, game jams and other coding challenges when I can." }
            p {
                "In 2023, I entered GMTK with "
                a { href: "https://gisleburt.itch.io/foil", "Foil" }
                ", 32bit Jam, collaborating with Ash Joseph, with "
                a { href: "https://gisleburt.itch.io/cosmic-booty", "Cosmic Booty" }
                ", and I managed a personal best in "
                a { href: "https://github.com/Gisleburt/advent-of-code-2023", "Advent of Code" }
                ". None of it won anything special but I am proud of all of it."
            }
            p {
                "I'm also particularly proud of my 2022 GMTK entry "
                a { href: "https://gisleburt.itch.io/roll-of-the-dicer", "Roll of the DiceR" }
                ", so feel free to check that out 😅"
            }
        }
    })
}

pub(super) fn PersonalInterests(cx: Scope) -> Element {
    cx.render(rsx! {
        section { id: "personal-interests",
            h2 { "Personal Interests" }
            Hackathons {}
            DungeonsAndDragons {}
            Homelab {}
        }
    })
}
