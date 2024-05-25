FROM oven/bun:1.0.34-alpine as vendor

WORKDIR /opt/vendor

COPY package.json .
COPY bun*.lockb .

RUN bun install

FROM node:20-alpine AS builder

WORKDIR /app

COPY --from=vendor /opt/vendor/node_modules ./node_modules

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["npm", "run", "start"]
