use yew::prelude::*;
use super::experience_detail::{ExperienceDetail, ExperienceDetailProps};

#[derive(Debug, Properties, PartialEq)]
pub struct ExperienceProps {
    pub title: String,
    pub blurb: String,
    pub details: Vec<ExperienceDetailProps>,
}

fn format_experience(details: &ExperienceDetailProps) -> Html {
    let key = format!("{}-{}", details.company, details.title);
    html! {
        <ExperienceDetail key={ key } ..details.clone() />
    }
}

#[function_component(Experience)]
pub fn experience_details(props: &ExperienceProps) -> Html {
    html! {
        <section>
            <h2>{ &props.title }</h2>
            <p>{ &props.blurb }</p>
            { props.details.iter().map(format_experience).collect::<Html>() }
        </section>
    }
}
