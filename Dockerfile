# Development Stage
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY prisma ./prisma/

RUN npm install

COPY . .

CMD [ "npm", "run", "start:migrate:prod" ]

