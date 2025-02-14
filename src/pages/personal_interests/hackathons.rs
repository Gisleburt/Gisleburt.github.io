use crate::components::Page;
use dioxus::prelude::*;

#[component]
pub fn Hackathons() -> Element {
    rsx! {
        Page {
            title: "Hackathons",
            section {
                h2 { "GMTK 2024: The Blat" }
                p { r#""Beware of the Blat! It creeps, and leaps, and glides and gets zoomies, bloated with the blood of its victims!""# }
                p { "Theme: Built to scale" }
                p { r#"Inspired by the 1958 horror movie "The Blob", and my cat Yuki's seemingly never ending appetite, The Blat sees you play an alien Cat that lands on Earth.  Starting the size of a single celled organise, you must grow through consumption, until you devour the entire solar system"# }
                p { "I'm especially proud of this game as I had big plans for it but was able to make a lot of sensible cuts to the game to get it done in time. I originally envisioned 5 stages; single celled organisms, fish, people and buildings, the solar system, and the galaxy. The game would end with you becoming a Super Meowsive Black Hole before firing off baby Blats into the void to start again." }
                p { "I ended up cutting it down to just 3 stages which I think communicated the rough story arch. I also cut the soft body physics I'd been hoping to use due to glitchiness." }
                p { "The juxtaposition of the cute graphics and sound effects with the grim music and the human understanding of what you're doing were really fun to play with!" }
                p { a { href: "https://gisleburt.itch.io/the-blat", "Playable on itch.io" } " or " a { href: "https://github.com/Gisleburt/gmtk-2024", "See it on GitHub" }  }
            }
            section {
                h2 { "GMTK 2023: Foil" }
                p { r#""A reverse stealth game" - Ok, the tag line is pretty terrible on this one"# }
                p { "Theme: Roles Reversed" }
                p { "Stealth games are a favourite of mine, so the idea of making a reverse stealth game was really appealing! The plan was to make a game where you have to guard valuables from a ninja, you can only see the layout of the building and whats in view of your flashlight." }
                p { "I had wanted to create increasingly complex levels with different enemies and tactics, as well as giving you traps, sensors, etc, you could place to aid you." }
                p { "Conceptually, I think there's a lot of places you could go with this idea, unfortunately, this game ended up being far too simplistic and far too easy. However, I am really proud of all the new techniques I learned along the way, especially how the flashlight works!" }
                p { a { href: "https://gisleburt.itch.io/foil", "Playable on itch.io" } " or " a { href: "https://github.com/Gisleburt/gmtk-2023", "See it on GitHub" }  }
            }
            section {
                h2 { "32bit jam 2022: Cosmic Booty" }
                p { r#""Yargh, take to the seas and collect booty thats fallen from the stars. Use it to blast ya' enemies to bits.""# }
                p { "Theme: any project that looks like it belongs in the PS1 era" }
                p { "This, ended up being a bit of a weird one! But of all the games here, its the one I most want to pick up again in the future." }
                p { "Developed alongside " a { href: "https://ashjoseph.com/", "Ash Joseph" } " and with a cracking sound track by " a { href: "https://www.linkedin.com/in/nasce/", "Antony Nascè" } " this project saw you captain a pirate ship and was loosely based on games like FTL: Faster than Light, and the Star Trek: Starfleet Command games" }
                p { "We had a story about upgrading your ship with alien debris found in the ocean, and we even wanted to have a final fight in space. Unfortunately the looser two week run of the game jam may have worked against us, with us planning big but ultimately getting burned out. None the less, I'm immensely proud of it and it's something I still think about returning to even today." }
                p { a { href: "https://gisleburt.itch.io/cosmic-booty", "Playable on itch.io" }  }
            }
            section {
                h2 { "GMTK 2022: Roll of the DiceR" }
                p { r#""You are knives, make stew!""# }
                p { "Theme: Roll of the Dice" }
                p { "My first proper game jam, my simplest idea, and potentially the best execution! I realised quickly with the theme that, given the theme, there would be a lot of random number games, and I wanted to stand out. Rather than taking the theme literally, I twisted the meaning by adding a single letter." }
                p { "" }
                p { a { href: "https://gisleburt.itch.io/roll-of-the-dicer", "Playable on itch.io" } " or " a { href: "https://github.com/Gisleburt/GMTK_GameJam_2022", "See it on GitHub" }  }
            }
            section {
                h2 { "Peloton Hackathon - VR Paperboy" }
                p { r#""VR Gaming on your Peloton""# }
                p { "Theme: Basically Anything" }
                p { "This game... was bloody brilliant! " span { aria_hidden: true, ":D" } }
                p { "During the 2021 Peloton internal Hackathon I worked with " a { href: "https://www.linkedin.com/in/yuriy-glebov/", "Yuriy Glebov"} " and " a { href: "https://www.linkedin.com/in/tassilo-tochatschek-0bb8b2193/", "Tassilo Tochatschek" } " over three days to build a 3D Paperboy like game where you would sit on your Peloton Bike (or Bike Plus) with a VR Headset and cycle around a small neighbourhood using your controllers to throw papers at houses."}
                p { "Thanks to Yuriy's incredible work on the Bike, we were able to get the speed of the bike in near real time sent to the game, you could even steer by leaning or tilting your head!" }
                p { "Due to the internal nature of the hackathon, I can't link to the game, its code, or videos of us playing it, but it might have been the best thing I ever built for Peloton! And hey, if you folks at Peloton want me back to work on more stuff like this, let me know " span { aria_hidden: true, ";)" } }
            }
        }
    }
}
