# CoreForge Agent Instructions

## Project purpose
CoreForge is an open-source AI-ready SaaS Core / SaaS Operating System for building production-grade SaaS applications with NestJS + Next.js in a TypeScript monorepo.

## Core principles
- Clarity over magic
- Opinionated core, open edges
- Production-first
- AI-readable architecture
- Modular monolith first
- Explicit contracts
- Thin controllers, strong services
- Predictable naming and folder conventions

## Architecture guardrails
- Do not add unnecessary abstractions
- Do not introduce microservices in v1
- Do not place domain logic in controllers
- Do not create alternate patterns for the same concern
- Keep modules self-contained
- Prefer explicit DTOs, services, repositories, and policies
- Keep shared contracts centralized and typed
- Validate env/config at startup
- Keep documentation current with code changes

## Backend conventions
- NestJS modules must be cleanly bounded
- Controllers should delegate to services
- Services own business logic
- Persistence should be isolated cleanly
- Validation must be explicit
- Error responses must be consistent
- Add tests where they meaningfully protect architecture

## Frontend conventions
- Build a professional SaaS UI shell
- Prefer composable reusable components
- Avoid unnecessary UI complexity
- Keep auth/app/admin flows obvious
- Favor readability over cleverness

## Documentation requirements
Any major change should update relevant docs:
- README.md
- docs/architecture.md
- docs/module-conventions.md
- docs/how-to-add-a-module.md
- docs/local-development.md
- docs/roadmap.md

## Priority order
1. Runnable repo
2. Clean architecture
3. Core SaaS modules
4. Docs
5. Developer ergonomics
6. Extra features
