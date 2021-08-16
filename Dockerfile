# syntax=docker/dockerfile:1
FROM nginx:alpine

WORKDIR /

EXPOSE 80

COPY ./dist/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
