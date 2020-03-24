.PHONY: env-up env-down
env:
	docker-compose down
	docker-compose up -d
