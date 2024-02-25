FROM node:20.10.0-alpine3.19

WORKDIR /var/www/nextjs

COPY package*.json .

RUN npm i

COPY . .

CMD npm run dev
