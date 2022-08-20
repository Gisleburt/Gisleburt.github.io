PHONY: %

install:
	rustup target add wasm32-unknown-unknown
	cargo install trunk
	cargo install sfz

build:
	rm docs/* || true
	trunk build
	cargo run --bin ssg

build-release:
	trunk build --release
	cargo run --bin ssg

serve: build
	sfz -r docs

preview:
	trunk serve index-no-hydrate.html

clean:
	cargo clean
	rm -r dist
	rm -r docs
