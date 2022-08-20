use yew::prelude::*;

#[derive(Debug, Properties, PartialEq)]
pub struct SkillList {
    pub name: String,
    pub skills: Vec<String>,
}

impl From<(String, Vec<String>)> for SkillList {
    fn from((name, skills): (String, Vec<String>)) -> Self {
        SkillList { name, skills }
    }
}

#[derive(Debug, Properties, PartialEq)]
pub struct SkillsListProps {
    pub title: String,
    pub blurb: String,
    pub list: Vec<SkillList>,
}

fn render_list(list: &SkillList) -> Html {
    html! {
        <>
            <dd>{ &list.name }</dd>
            <dt>{ &list.skills.join(", ") }</dt>
        </>
    }
}

#[function_component(SkillsList)]
pub fn skills_list(props: &SkillsListProps) -> Html {
    html! {
        <section>
            <h2>{ &props.title }</h2>
            <p>{ &props.blurb }</p>
            <dl>
                { props.list.iter().map(render_list).collect::<Html>()}
            </dl>
        </section>
    }
}
