import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { membersTable } from '@members/infrastructure/persistence/member.schema.ts';

export const projectsTable = pgTable('projects', {
  id: uuid().defaultRandom().primaryKey(),
  name: text().notNull(),
  websiteUrl: text().notNull(),
  githubUrl: text().notNull(),
  imageUrl: text().notNull(),
  description: text().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull()
});

export const projectMembershipsTable = pgTable('projectMemberships', {
  id: uuid().defaultRandom().primaryKey(),
  projectId: uuid().notNull().references(() => projectsTable.id, {
    onDelete: 'cascade'
  }),
  memberId: uuid().notNull().references(() => membersTable.id, {
    onDelete: 'cascade'
  }),
  projectRole: text().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull()
});
