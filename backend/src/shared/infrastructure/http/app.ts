import express from 'express';
import { createMembersModule } from '@members/members.module.ts';
import { createProjectsModule } from '@projects/projects.module.ts';
import { createEventsModule } from '@events/events.module.ts';
import { docsRouter } from '@shared/infrastructure/http/openapi/docs.routes.ts';
import { registerOpenApiDocs } from '@shared/infrastructure/http/openapi/bootstrap.ts';

export function createApp() {
  const app = express();

  app.use(express.json());

  registerOpenApiDocs();

  app.use('/', docsRouter);
  app.use('/members', createMembersModule());
  app.use('/projects', createProjectsModule());
  app.use('/events', createEventsModule());

  return app;
}
