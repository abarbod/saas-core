# CoreForge Architecture

## Principles
1. Clarity over magic
2. Opinionated core, open edges
3. Production-first
4. Modular monolith first
5. Explicit contracts across boundaries

## Monorepo topology
- apps/api: NestJS bounded modules
- apps/web: Next.js dashboard + admin + auth shell
- packages/types: shared contracts
- packages/sdk: API client
- packages/ui: shared UI primitives
- packages/config: shared constants
- tools/cli: future generator/codegen surface

## Backend bounded modules
- auth
- tenancy
- rbac
- billing
- usage
- audit
- jobs
- events
- storage
- admin
- health/config/database (platform modules)

Controllers are thin and defer to services. Services own business logic. Prisma persistence is isolated in the database service and module services.

## API strategy
- Prefix: `/api/v1`
- OpenAPI available at `/api/docs`
- DTO validation through class-validator + global ValidationPipe

## Tenant isolation
- Every tenant-owned record has `tenantId`
- Services should always accept tenant context and enforce scoping
- Super admin endpoints intentionally operate cross-tenant and must be explicitly namespaced (`/admin/*`)

## Queue/events
- BullMQ queue `core`
- Explicit job names with idempotent keys where practical
- Internal event service is explicit and replaceable with event bus later

## Storage
- Storage service defines tenant-safe object keys `tenantId/path`
- S3-compatible adapter can replace in-memory/stub implementation
