import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { timestamps } from '@shared/infrastructure/db/drizzle.ts';

export const usersTable = pgTable('users', {
  id: uuid().defaultRandom().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  ...timestamps
});
