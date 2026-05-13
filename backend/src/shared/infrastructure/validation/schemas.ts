import { z } from 'zod';

export const apiErrorSchema = z.object({
  code: z.string(),
  message: z.string(),
  fields: z.record(z.string(), z.string()).optional(),
  requestId: z.string().optional()
});

export const apiErrorResponseSchema = z.object({
  data: z.null(),
  error: apiErrorSchema
});

export function apiSuccessResponseSchema<T extends z.ZodTypeAny>(
  dataSchema: T
) {
  return z.object({
    data: dataSchema,
    error: z.null()
  });
}
