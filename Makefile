all: init-dev run-dev

init-dev:
	cp etc/git-hooks/pre-commit .git/hooks
	yarn install
