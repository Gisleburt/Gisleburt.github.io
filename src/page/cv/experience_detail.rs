use yew::prelude::*;

fn default_end() -> String {
    "Now".to_string()
}

#[derive(Clone, Debug, Properties, PartialEq)]
pub struct ExperienceDetailProp {
    pub company: String,
    pub title: String,
    pub start: String,
    #[prop_or_else(default_end)]
    pub end: String,
    pub detail: String,
}

fn format_detail(detail: &str) -> Html {
    detail.lines()
        .into_iter()
        .filter(|line| !line.trim().is_empty())
        .map(|line| html!{<p>{ line }</p>})
        .collect()
}

#[function_component(ExperienceDetail)]
pub fn experience_details(props: &ExperienceDetailProp) -> Html {
    html! {
        <section class="experience-details">
            <header>
                <span>
                    <span class="company">{ &props.company }</span>
                    { "-" }
                    <span class="title">{ &props.title }</span>
                </span>
                <span>
                    <span class="start">{ &props.start }</span>
                    <span class="end">{ &props.end }</span>
                </span>
            </header>
            { format_detail(&props.detail) }
        </section>
    }
}
