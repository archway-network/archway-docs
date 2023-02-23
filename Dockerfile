# syntax=docker/dockerfile:1
#
# Enable BuildKit before building this image:
# > export DOCKER_BUILDKIT=1
#
# To build the production image:
# > source .env && docker build --secret id=ALGOLIA_INDEX (repeat for all secrets...) -t archwaynetwork/docs .

FROM node:lts-alpine AS base

RUN set -eux \
  && apk add --no-cache ca-certificates \
  && mkdir -p /usr/src/app /opt/app \
  && chown node:node /usr/src/app /opt/app

WORKDIR /usr/src/app

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE ${NUXT_PORT}

# Image used in the development environment
FROM base AS development

USER node

COPY --chown=node:node .npmrc package.json package-lock.json ./

RUN set -eux \
  && npm install \
  && npm cache clean --force

ENV PATH ./node_modules/.bin/:${PATH}


# Builder for the production image
FROM base AS builder

COPY . .

RUN \
  --mount=type=secret,id=ALGOLIA_INDEX \
  --mount=type=secret,id=ALGOLIA_APPLICATION_ID \
  --mount=type=secret,id=ALGOLIA_SEARCH_API_KEY \
  --mount=type=secret,id=ALGOLIA_WRITE_API_KEY \
  set -eux \
  && npm ci \
  && npm cache clean --force \
  && ( set +x \
    # Disable command tracing to avoid leaking secrets
    && ALGOLIA_INDEX=$(cat /run/secrets/ALGOLIA_INDEX) \
    ALGOLIA_APPLICATION_ID=$(cat /run/secrets/ALGOLIA_APPLICATION_ID) \
    ALGOLIA_SEARCH_API_KEY=$(cat /run/secrets/ALGOLIA_SEARCH_API_KEY) \
    ALGOLIA_WRITE_API_KEY=$(cat /run/secrets/ALGOLIA_WRITE_API_KEY) \
    npm run build \
  )


# Image used in the staging/production environment
FROM base

USER node

WORKDIR /opt/app

COPY --from=builder --chown=node:node /usr/src/app/.output/ ./

ENTRYPOINT ["node", "server/index.mjs"]
