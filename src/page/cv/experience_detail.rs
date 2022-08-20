use yew::prelude::*;

#[derive(Clone, Debug, Properties, PartialEq)]
pub struct ExperienceDetailProps {
    pub company: String,
    pub title: String,
    pub start: String,
    pub end: Option<String>,
    pub detail: String,
}

fn format_detail(detail: &str) -> Html {
    detail.lines()
        .filter_map(|line| {
            if line.trim().is_empty() {
                None
            } else {
                Some(html! {<p>{ line }</p>})
            }
        })
        .collect()
}

#[function_component(ExperienceDetail)]
pub fn experience_details(props: &ExperienceDetailProps) -> Html {
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
                    <span class="end">
                        if let Some(end) = &props.end {
                            { end }
                        } else {
                            { "Now" }
                        }
                    </span>
                </span>
            </header>
            { format_detail(&props.detail) }
        </section>
    }
}
