# CoreForge

CoreForge is an open-source AI-ready SaaS Core / SaaS Operating System for building production-grade SaaS products with a clear NestJS + Next.js architecture.

## Who it is for
- Teams building serious multi-tenant B2B SaaS
- AI SaaS teams that need usage + queue + audit foundations
- ERP-lite/internal-tool/workflow platform builders

## Why it exists
Most starters are either toy demos or over-engineered platforms. CoreForge provides an opinionated, modular-monolith baseline with explicit boundaries and production-oriented defaults.

## Stack
- Monorepo: pnpm + Turbo
- Backend: NestJS + Prisma + PostgreSQL
- Frontend: Next.js + TypeScript
- Queue: BullMQ + Redis
- Shared packages: types, sdk, ui, config

## v1 features
- Auth foundation (email/password + JWT)
- Multi-tenant foundations (tenants, memberships)
- RBAC foundations (roles, permissions)
- Billing and plan abstractions
- Usage/metering records (AI-ready schema)
- Audit logging
- Queue + event foundation
- S3-style storage service abstraction
- Super admin API + dashboard shell
- Health endpoint + typed env validation

## Quick start
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Configure env (apps/api/.env):
   - DATABASE_URL
   - JWT_SECRET
   - REDIS_HOST/REDIS_PORT
3. Run DB setup:
   ```bash
   pnpm --filter @coreforge/api prisma:generate
   pnpm --filter @coreforge/api prisma:migrate
   ```
4. Start development:
   ```bash
   pnpm dev
   ```

## Architecture overview
- `apps/api`: API modules and domain boundaries
- `apps/web`: SaaS shell (marketing + app + admin routes)
- `packages/*`: shared contracts, sdk, and UI primitives
- `tools/cli`: generator strategy scaffold
- `docs/*`: conventions and contributor onboarding

## Roadmap
See `docs/roadmap.md` for phased roadmap from v1 to enterprise readiness.

## Contributing
See `CONTRIBUTING.md` for contribution flow, coding conventions, and quality expectations.
