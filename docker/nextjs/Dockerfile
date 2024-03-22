FROM node:20-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json ./
RUN npm i

FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package-lock.json ./package-lock.json
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["npm", "run", "start"]
