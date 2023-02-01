FROM node:lts as node_with_pnpm
RUN npm install -g pnpm
WORKDIR /nimblenext

FROM node_with_pnpm as composer
COPY pnpm-lock.yaml ./
RUN pnpm fetch
COPY package.json ./
RUN pnpm install --prefer-offline --frozen-lockfile
ADD . ./
RUN pnpm build

FROM node_with_pnpm as runner
ENV NODE_ENV production

COPY --from=composer /nimblenext/next.config.js ./
COPY --from=composer /nimblenext/public ./public
COPY --from=composer /nimblenext/.next ./.next
COPY --from=composer /nimblenext/node_modules ./node_modules
COPY --from=composer /nimblenext/package.json ./package.json

EXPOSE 3000
CMD ["pnpm", "start"]
