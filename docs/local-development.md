# Local Development

## Requirements
- Node.js 22+
- pnpm 10+
- PostgreSQL 15+
- Redis 7+

## Setup
```bash
pnpm install
cp apps/api/.env.example apps/api/.env
pnpm --filter @coreforge/api prisma:generate
pnpm --filter @coreforge/api prisma:migrate
pnpm dev
```

## Services
- Web: http://localhost:3000
- API: http://localhost:4000/api/v1
- Swagger: http://localhost:4000/api/docs

## Testing and checks
```bash
pnpm typecheck
pnpm test
pnpm build
```
