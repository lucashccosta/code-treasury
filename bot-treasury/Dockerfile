
FROM node:18.17.1-alpine AS builder
WORKDIR /app
COPY ./src ./src
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
RUN npm install
RUN npm run build

FROM node:18.17.1-alpine AS final
WORKDIR /app
COPY --from=builder ./app/dist ./dist
COPY package.json .
COPY package-lock.json .
RUN npm install --production