# ──────────────────────────────────────────────────────────────
# ZYNIQ STUDIO - Agent-UI (Next.js)
# ──────────────────────────────────────────────────────────────

FROM node:20-slim AS base
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@9.12.0 --activate

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build
FROM base AS build
ARG NEXT_PUBLIC_DEFAULT_ENDPOINT
ARG NEXT_PUBLIC_OS_SECURITY_KEY
ENV NEXT_PUBLIC_DEFAULT_ENDPOINT=${NEXT_PUBLIC_DEFAULT_ENDPOINT}
ENV NEXT_PUBLIC_OS_SECURITY_KEY=${NEXT_PUBLIC_OS_SECURITY_KEY}
COPY . .
RUN pnpm build

# Runtime
FROM node:20-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production

RUN corepack enable && corepack prepare pnpm@9.12.0 --activate

COPY --from=build /app/package.json ./package.json
COPY --from=build /app/next.config.ts ./next.config.ts
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000

CMD ["pnpm", "start", "-p", "3000"]
