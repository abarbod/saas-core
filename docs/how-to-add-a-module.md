# How to Add a New Module

1. Create module folder in `apps/api/src/<module-name>`.
2. Add:
   - `<module-name>.module.ts`
   - `<module-name>.service.ts`
   - Optional `<module-name>.controller.ts`
   - DTOs
3. Register module in `AppModule` imports.
4. Add Prisma models if needed + migration.
5. Add tests for critical business paths.
6. Update docs:
   - architecture.md (if topology changes)
   - module-conventions.md (if conventions evolve)

## Checklist
- [ ] Explicit DTO validation
- [ ] Thin controllers
- [ ] Service-owned logic
- [ ] Tenant scoping enforced if tenant data
- [ ] Authorization policy present if privileged action
- [ ] Audit log for significant admin/security action
