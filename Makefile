.PHONY: env env-down pre-migrate migrate
env:
	docker-compose down
	docker-compose up -d
env-down:
	docker-compose down
pre-migrate:
	npm run db:pre-migrate
migrate:
	npm run db:migrate
