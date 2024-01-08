.PHONY: %

install:
	cargo install dioxus-cli
	cargo install cargo-watch
	cargo install static-web-server
	rustup target add wasm32-unknown-unknown

build:
	dx build --features web --release
	cargo run --features ssr --release

serve: build
	static-web-server --port 8787 --root ./docs

serve-watch:
	cargo watch --watch src --watch public -- make serve
