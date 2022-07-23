use yew::prelude::*;

#[derive(Debug, Properties, PartialEq)]
pub struct SimpleSectionProps {
    pub title: String,
    pub body: String,
}

#[function_component(SimpleSection)]
pub fn simple_section(props: &SimpleSectionProps) -> Html {
    html! {
        <section>
            <h2>{ &props.title}</h2>
            <>{ props.body.lines().filter_map(lines_to_paragraphs).collect::<Html>() }</>
        </section>
    }
}

fn lines_to_paragraphs(line: &str) -> Option<Html> {
    if line.is_empty() {
        None
    } else {
        Some(html! { <p>{ line }</p> })
    }
}
