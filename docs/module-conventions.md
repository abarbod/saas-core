# Module Conventions

## Naming
- `<module>.module.ts`
- `<module>.controller.ts`
- `<module>.service.ts`
- `dto.ts` or `dto/*.dto.ts`

## Boundaries
- Controllers: request mapping only
- Services: business logic
- Repositories/persistence: explicit Prisma queries in services or extracted repository class when complexity grows

## DTO and validation
- Every mutating endpoint should use DTO classes
- Validate with class-validator decorators
- Avoid implicit object acceptance in controllers

## Error handling
- Throw explicit Nest exceptions for expected errors
- Keep error messages stable and useful

## Authorization
- RBAC checks should be explicit in service policy methods/guards
- Keep permission keys as stable constants

## Cross-module communication
- Prefer service injection for synchronous cases
- Use jobs/events for async workflows
