PHONY: %

install:
	rustup target add wasm32-unknown-unknown
	cargo install trunk
	cargo install sfz

build:
	trunk build
	cargo run --bin ssg

build-release:
	trunk build --release
	cargo run --bin ssg

serve: build
	sfz -r docs

clean:
	cargo clean
	rm -r dist
	rm -r docs
