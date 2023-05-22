FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npx prisma generate

# CMD ["npx", "prisma", "generate", "&&"  "npm", "run", "start:migrate:dev" ]

