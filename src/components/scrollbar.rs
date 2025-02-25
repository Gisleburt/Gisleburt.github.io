use dioxus::prelude::*;

#[component]
pub fn Scrollbar() -> Element {
    document::eval(
        r##"
            const container = document.querySelector(".page-container");
            const scrollbar = document.querySelector(".scrollbar");
            const shuttle = scrollbar.firstChild;


            container.addEventListener("scroll", (event) => {
              const height = scrollbar.scrollHeight;
              const proportion = container.scrollTop / container.scrollTopMax;
              const scrollMax = scrollbar.scrollHeight - (2 * shuttle.scrollHeight);
              const newTop = scrollMax * proportion;
              shuttle.style.top = `${newTop}px`;
            });
        "##,
    );
    rsx! {
        div {
            class: "scrollbar",
            div {}
        }
    }
}
