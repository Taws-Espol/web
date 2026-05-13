import { defineConfig } from 'drizzle-kit';
import { DATABASE_URL } from './src/config/env.ts';

export default defineConfig({
  out: './drizzle',
  schema: [
    './src/modules/members/infrastructure/persistence/member.schema.ts',
    './src/modules/projects/infrastructure/persistence/project.schema.ts',
    './src/modules/events/infrastructure/persistence/event.schema.ts'
  ],
  dialect: 'postgresql',
  dbCredentials: {
    url: DATABASE_URL
  },
  casing: 'snake_case'
});
