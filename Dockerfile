FROM node:10-alpine

WORKDIR /app
ADD package.json /app
ADD package-lock.json /app
RUN npm ci
ADD . /app

CMD ["yarn", "start:prod"]
EXPOSE 8080
