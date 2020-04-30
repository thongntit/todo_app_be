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
	nodemon app.js
prod-be:
	docker run -d -p 8080:8080 --rm -e NODE_ENV=production --name todo-app-be --network todo-network registry.gitlab.com/ltv/c/rulers/todo_app
prod-fe:
	docker run -d -p 80:80 --rm --name todo-app-fe registry.gitlab.com/ltv/c/rulers/todo_app_fe
