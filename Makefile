.PHONY: %
default: hot

install:
	cargo install dioxus-cli
	cargo install static-web-server

build:
	dx bundle --platform web --ssg

serve: build
	static-web-server --port 8787 --root ./target/dx/gisleburt-github-io/release/web/public

hot:
	dx serve
