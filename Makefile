setup-dev: init-dev run-dev

init-dev:
	cp etc/git-hooks/pre-commit .git/hooks
	docker-compose -f ./etc/docker/development/docker-compose.yml build
	docker-compose -f ./etc/docker/development/docker-compose.yml run --rm app yarn install
	docker-compose -f ./etc/docker/development/docker-compose.yml run --rm app npm rebuild node-sass

run-dev:
	docker-compose -f ./etc/docker/development/docker-compose.yml up --build

stop-dev:
	docker-compose -f ./etc/docker/development/docker-compose.yml down

setup-prod: init-prod run-prod

init-prod:
	cp etc/git-hooks/pre-commit .git/hooks
	docker-compose -f ./etc/docker/production/docker-compose.yml build
	docker-compose -f ./etc/docker/production/docker-compose.yml run --rm app yarn install
	docker-compose -f ./etc/docker/production/docker-compose.yml run --rm app npm rebuild node-sass

run-prod:
	docker-compose -f ./etc/docker/production/docker-compose.yml up --build

stop-prod:
	docker-compose -f ./etc/docker/production/docker-compose.yml down