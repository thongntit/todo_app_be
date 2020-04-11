.PHONY: env env-down pre-migrate migrate
env-down:
	docker-compose down
env: env-down
	docker-compose up -d
pre-migrate:
	npx sequelize db:create
migrate: pre-migrate
	npx sequelize db:migrate
run:
	npx nodemon app.js
