FROM node:10-alpine

WORKDIR /app
ADD package.json /app
RUN npm install
ADD . /app

CMD [ "yarn", "start" ]
EXPOSE 8080
