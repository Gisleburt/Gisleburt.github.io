use daniel_mason_blog::App;
use yew::ServerRenderer;
use std::path::PathBuf;

const DOCS_DIR: &str = "docs"; // The output folder for ssr which github pages will read
const DIST_DIR: &str = "dist"; // The intermediate output from trunk when building the csr

/// Trunk will create a CSR version of the app and place it in a `dist` directory.
///
/// This function will create a `docs` directory, which is what GitHub Pages actually wants to use,
/// and then copy the contents of `dist` into `docs`
async fn prepare_docs_dir(docs_dir: &str, dist_dir: &str) -> Result<(), String> {
    let docs_path = PathBuf::from(docs_dir);

    // Create docs
    tokio::fs::create_dir_all(docs_dir)
        .await
        .map_err(|_| {
            format!("Unable to create director `{}` which is required for GitHub Pages", docs_dir)
        })?;

    // Copy dist to docs
    let mut dist = tokio::fs::read_dir(dist_dir)
        .await
        .map_err(|_| {
            format!("Unable to read directory `{}`, did you run `trunk` to create it?", dist_dir)
        })?;
    while let Some(entry) = dist.next_entry().await.map_err(|_| "Failed to read file")? {
        println!("Copying: {}", entry.path().to_str().unwrap_or("?"));
        let new_file = docs_path.join(entry.file_name());
        if !new_file.exists() {
            tokio::fs::File::create(&new_file)
                .await
                .map_err(|_| format!("unable to create `{}`", &new_file.to_str().unwrap_or("?")))?;
        }
        tokio::fs::copy(entry.path(), new_file)
            .await
            .map_err(|_| format!("Unable to copy `{}`", entry.path().to_str().unwrap_or("?")))?;
    }

    Ok(())
}

/// After copying the contents of dist to docs, docs still only contains a CSR version of the app.
///
/// This function will read in the index.html file, run the server side renderer, then write
/// the result into index.html
async fn update_index_html(docs_dir: &str) -> Result<(), String> {
    let index_path = PathBuf::from(docs_dir).join("index.html");

    // Get the context of index.html
    let index_html = tokio::fs::read_to_string(&index_path)
        .await
        .map_err(|_| {
            format!("failed to read index.html in `{}`, could the copy have failed?", docs_dir)
        })?;

    // Render the contents of the app
    let renderer = ServerRenderer::<App>::new();
    let content = renderer.render().await;

    // Write the app into index.html
    let output = index_html.replace("<body>", &format!("<body>{}", content));
    tokio::fs::write(&index_path, output)
        .await
        .map_err(|_| {
            format!("failed to write to index.html in `{}`, could a file lock have been created?", docs_dir)
        })?;
    Ok(())
}

#[tokio::main]
async fn main() {
    prepare_docs_dir(DOCS_DIR, DIST_DIR)
        .await
        .unwrap_or_else(|msg| panic!("{}", msg));
    update_index_html(DOCS_DIR)
        .await
        .unwrap_or_else(|msg| panic!("{}", msg));
}
