# syntax=docker/dockerfile:1
FROM node:16-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci --ignore-scripts

COPY . .

RUN npm run validate

RUN npm run build

FROM nginx:alpine
EXPOSE 80
COPY --from=build ./app/dist/ /usr/share/nginx/html
COPY --from=build ./app/nginx.conf /etc/nginx/conf.d/default.conf
