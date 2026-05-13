import { apiErrorResponseSchema } from '@shared/infrastructure/validation/schemas.ts';

export function errorResponses(...codes: number[]) {
  return Object.fromEntries(
    codes.map((code) => [
      code,
      {
        description: `Error ${code}`,
        content: {
          'application/json': {
            schema: apiErrorResponseSchema
          }
        }
      }
    ])
  );
}
