FROM node:lts as node_with_pnpm
RUN corepack enable pnpm
WORKDIR /app

FROM node_with_pnpm as composer
COPY pnpm-lock.yaml ./
RUN pnpm fetch
COPY package.json ./
RUN pnpm install --prefer-offline --frozen-lockfile
ADD . ./
RUN pnpm build

FROM node_with_pnpm as runner
ENV NODE_ENV production

COPY --from=composer /app/node_modules ./node_modules
COPY --from=composer /app/.next ./.next
COPY --from=composer /app/public ./public
COPY --from=composer /app/package.json ./package.json
COPY --from=composer /app/next.config.js ./

EXPOSE 3000
CMD ["pnpm", "start"]
