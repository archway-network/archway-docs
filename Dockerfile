FROM node:lts-alpine AS base

RUN set -eux \
  && apk add --no-cache ca-certificates \
  && mkdir -p /usr/src/app /opt/app \
  && chown node:node /usr/src/app /opt/app

USER node

WORKDIR /usr/src/app

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE ${NUXT_PORT}

# Image used in the development environment
FROM base AS development

COPY --chown=node:node .npmrc package.json package-lock.json ./

RUN set -eux \
  && ls -lha \
  && npm install \
  && npm cache clean --force

ENV PATH ./node_modules/.bin/:${PATH}
