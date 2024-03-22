FROM oven/bun:1.0.34-alpine as vendor

WORKDIR /opt/vendor

COPY package.json .
COPY bun.lockb .

RUN bun install

FROM node:20.10.0-alpine3.19 as base

WORKDIR /var/www/nextjs

COPY --from=vendor /opt/vendor/node_modules node_modules

COPY . .

CMD npm run dev
