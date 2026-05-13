import { OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import { openApiRegistry } from '@shared/infrastructure/http/openapi/registry.ts';
import { buildGlobalErrorsDescription } from '@shared/infrastructure/http/openapi/global-errors.ts';

export function createOpenApiDocument() {
  const generator = new OpenApiGeneratorV3(openApiRegistry.definitions);
  const globalErrorsDescription = buildGlobalErrorsDescription();

  return generator.generateDocument({
    openapi: '3.0.3',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: globalErrorsDescription
    },
    servers: [
      {
        url: 'http://localhost:8000'
      }
    ]
  });
}
