FROM node:18.17.1-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:18.17.1-alpine AS final
WORKDIR /app
COPY --from=builder ./app/dist .
COPY package.json .
COPY package-lock.json .
COPY .env.example .env
RUN npm install --production
CMD [ "npm", "run", "start" ]