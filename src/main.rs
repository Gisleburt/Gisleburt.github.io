use yew::prelude::*;
use yew::ServerRenderer;

#[function_component(App)]
fn app() -> Html {
    html! {
        <h1>{ "Hello World" }</h1>
    }
}

#[tokio::main]
async fn main() {
    let renderer = ServerRenderer::<App>::new()
        .hydratable(false); // This removes hydration markers

    let rendered = renderer.render().await;

    // Prints: <div>Hello, World!</div>
    println!("{}", rendered);
}
