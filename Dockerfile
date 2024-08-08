# Base Image
FROM node:lts-alpine3.20 as base

RUN apk add --no-cache tzdata

# Install Packages
FROM base as packages

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

# Build image
FROM base as builder

WORKDIR /app

COPY --from=packages /app/ .
COPY . .

RUN yarn build

# Production Stage
FROM base as production
ENV PORT 3000

# Global pm2 runtime
RUN yarn global add pm2 \
    && yarn cache clean

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

COPY pm2.json ./pm2.json
COPY entrypoint.sh ./entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["/bin/sh", "./entrypoint.sh"]
