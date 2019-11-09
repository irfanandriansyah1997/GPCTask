setup-dev: init-dev run-dev

init-dev:
	cp etc/git-hooks/pre-commit .git/hooks
	yarn install
	npm rebuild node-sass
