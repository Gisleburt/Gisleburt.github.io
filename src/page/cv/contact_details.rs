use yew::prelude::*;

#[derive(Clone, Debug, Properties, PartialEq)]
pub struct ContactDetailProp {
    label: String,
    value: String,
    href: Option<String>,
}

#[function_component(ContactDetail)]
fn contact_detail(props: &ContactDetailProp) -> Html {
    html! {
        <>
            <dd>{ &props.label }</dd>
            <dt>
                if let Some(href) = &props.href {
                    <a href={ href.clone() }>
                        { &props.value }
                    </a>
                } else {
                    { &props.value }
                }
            </dt>
        </>
    }
}

#[derive(Clone, Debug, Properties, PartialEq)]
pub struct ContactDetailsProp {
    title: String,
    contact_details: Vec<ContactDetailProp>,
}

#[function_component(ContactDetails)]
fn contact_details(props: &ContactDetailsProp) -> Html {
    html! {
        <section>
            <h2>{ &props.title }</h2>
            { props.contact_details.iter().map(| p | {
                html! { <ContactDetail key={p.label.clone()} ..p.clone() /> }
            }).collect::<Html>()}
        </section>
    }
}
