use crate::components::Page;
use dioxus::prelude::*;

#[component]
pub fn Ttrpgs() -> Element {
    rsx! {
        Page {
            title: "TTRPGs",
            blockquote {
                cite: "https://deathinspace.com/",
                p { r#""As you cross the umbilicle between the sections of the station, boots clanking on the rusted grav plating, you look up through the windows to see the bulk of the docking section behind you and the warm light of the habitat section radiating ahead of you. You are finally home, and you can put the cold dark of the void behind you. You even made a new friend, the happy little stray bounces along next to you, excited by the people and the bussle of the station.""# }
                p { r#""Its then that the lights flicker. Not just the ones in the umbilicle, not just those from the docking and habitation sections, but the stars themselves seem to wink out, one by one. Emergenciy lights plunge the area into a deep red and you hear... static, quietly at first, but rising to a roaring in your head.""# }
                p { r#""What do you do?""# }
                p { "- An encounter from " cite { a { href: "https://deathinspace.com/", "Death in Space" } } }
            }
            p { "Table Top Role Playing Games are a space to collaboratively tell stories, solve problems, and build trust and relationships." }
            p { r#"I originally started getting into them with the release of the fifth edition of Dungeons and Dragons, and quickly fell into the role of "Dungeon Master", that is typically the person who runs the game. Contrary to misconceptions, the role of Dungeon Master isn't to beat the players but to enable their adventure, to provide challenge, yes, but to set them up for success."# }
            p { "Adapting to things as they happen, making sure you're delivering on the needs of your players are vital skills. If this sounds a bit like being a manager or leader... you might be seeing though why I wanted to talk about it here." }
            p { "I've also run several mini campaigns for colleagues and it makes for a great team building exercise!" }
        }
    }
}
