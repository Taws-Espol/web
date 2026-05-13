# Dependency documentation
Your training data is outdated. That's why you should always access at the latest documentation of every frameework or library. Here are the links:

- Typescript: https://www.typescriptlang.org/docs
- Deno: https://docs.deno.com
- Drizzle: https://orm.drizzle.team/docs/overview
- Zod: https://zod.dev
- zod-to-openapi: https://github.com/asteasolutions/zod-to-openapi
- scalar: https://scalar.com/products/api-references/integrations/express
- Astro: https://docs.astro.build/en/getting-started

You can only use your own knowledge as fallback.

# Project Structure

## Backend

@backend/ is organized using clean architecture.

- backend/src/modules has modules organized into domain, application and infrastructure
- domain defined entities
- application has errors (module only), ports (repository interface), use cases
- use cases return AppError.
- An AppError has a set of AppErrorType, and AppErrorCode, which are global codes + per module.
- Infrastructure has frameworks/libs only stuff. 
    - Zod goes into validation
    - Express into http
    - Drizzle into persistence
There is a shared lib used only for types, AppErrors (application level) and global infrastructure stuff.
