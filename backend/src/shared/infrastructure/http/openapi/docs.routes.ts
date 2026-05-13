import { Router } from 'express';
import type { Request, Response } from 'express';
import { apiReference } from '@scalar/express-api-reference';
import { createOpenApiDocument } from '@shared/infrastructure/http/openapi/document.ts';

export const docsRouter = Router();

docsRouter.get('/openapi.json', (_req: Request, res: Response) => {
  res.json(createOpenApiDocument());
});

docsRouter.use('/docs', apiReference({ url: '/openapi.json' }));
