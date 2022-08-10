FROM node:18-alpine3.15

WORKDIR /var/www/html

COPY . .

RUN npm install