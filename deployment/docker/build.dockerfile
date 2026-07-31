ARG DOCKER_REGISTRY

FROM ${DOCKER_REGISTRY:-}base-images/node-build:24-bookworm-slim AS build

WORKDIR /src

COPY package.json .
COPY package-lock.json .
# Credential-less in the repo; the ADO pipeline's npm authenticate step injects
# feed credentials into it before the bake (same mechanism as legal / admin-ui).
# Local builds need your own authenticated .npmrc.
COPY .npmrc .

RUN npm ci

# .git IS dockerignored: this site doesn't use showLastUpdateAuthor/Time, so
# the build never shells out to git (unlike legal).
COPY . .

ENV CI=true

# Build-time site config, baked into the static output (docusaurus.config.js
# customFields). Values arrive via docker-bake.hcl from the pipeline env;
# BRANCH is deliberately unset — editUrl falls back to main.
ARG ZENDESK_KEY
ARG AMPLITUDE_API_KEY
ARG GTM_ID
ARG FEATURE_DEV_FLAG
ARG FEATURE_NEW_PRODUCTS_FLAG
ENV ZENDESK_KEY=${ZENDESK_KEY} \
    AMPLITUDE_API_KEY=${AMPLITUDE_API_KEY} \
    GTM_ID=${GTM_ID} \
    FEATURE_DEV_FLAG=${FEATURE_DEV_FLAG} \
    FEATURE_NEW_PRODUCTS_FLAG=${FEATURE_NEW_PRODUCTS_FLAG}

RUN npm run build
