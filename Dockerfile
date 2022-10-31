FROM node:16-alpine AS base

RUN apk add --no-cache libc6-compat

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml* ./ ./

RUN pnpm install

COPY . .

# Rebuild the source code only when needed
FROM base AS build

WORKDIR /app

COPY --from=base  /app/node_modules ./node_modules

COPY . .

RUN pnpm build



# Production image, copy all the files and run next
FROM node:16-alpine AS run
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=build /app/public ./public

COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static


RUN npm install -g pnpm

RUN pnpm install next

USER nextjs

EXPOSE 8080

ENV PORT 8080

CMD pnpm start



