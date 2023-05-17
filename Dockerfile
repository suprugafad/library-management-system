# Development Stage
FROM node:18-alpine as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Production Stage
FROM node:18-alpine as production

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy from build stage
COPY --from=development /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]
