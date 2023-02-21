## step 1: Applicaiton builder
FROM node:18.12.1-alpine3.16 AS builder

WORKDIR /app

# COPY PACKAGE DEPENDENCIES
COPY package.json yarn.lock ./
COPY scripts/* scripts/

# INSTALL PACKAGES
RUN chmod +x /app/scripts/prune /app/scripts/remove-json-keys \
  && /app/scripts/prune /app/package.json devDependencies \
  @babel/cli \
  @babel/core \
  @babel/node \
  @babel/plugin-proposal-class-properties \
  @babel/plugin-proposal-decorators \
  @babel/preset-env \
  @babel/preset-typescript \
  babel-plugin-module-resolver \
  babel-plugin-transform-typescript-metadata \
  tsconfig-paths \
  typescript \
  && yarn install --frozen-lockfile --non-interactive --ignore-optional --silent &> /dev/null \
  && tar -zcvf yarn-cache.tar.gz /usr/local/share/.cache/yarn &> /dev/null

COPY . .

# BUILD APP
RUN yarn build \
  && /app/scripts/remove-json-keys /app/package.json devDependencies

## step2 : Serve application
FROM node:18.12.1-alpine3.16

# CONFIGURE ENVIRONMENT
ENV NODE_ENV=production

# CONFIGURE APP DIR
WORKDIR /app

# COPY PROJECT FILE BUILDED
COPY --from=builder /app/package.json /app/yarn.lock /app/yarn-cache.tar.gz ./

RUN tar -xvf yarn-cache.tar.gz -C / &> /dev/null \
  && apk add --no-cache --virtual tmp-deps curl &> /dev/null \
  && curl -sf https://gobinaries.com/tj/node-prune | sh \
  && apk del tmp-deps &> /dev/null \
  && yarn global --prod --silent --no-interactive --ignore-optional add pm2 &> /dev/null \
  && yarn install --prefer-offline --frozen-lockfile --prod --silent --no-interactive --ignore-optional &> /dev/null \
  && node-prune /app/node_modules \
  && node-prune /usr/local/share/.config/yarn/global/node_modules \
  && node-prune /usr/local/lib/node_modules \
  && rm -rf /usr/local/share/.cache/* \
  /tmp/* \
  /usr/local/bin/node-prune \
  /var/cache/apk/* \
  /app/yarn-cache.tar.gz \
  /root/.npm/*

COPY --from=builder /app/dist .
COPY --from=builder /app/process.yml ./

CMD ["pm2-runtime", "/app/process.yml"]