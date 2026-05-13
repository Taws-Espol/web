import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { membersTable } from '@members/infrastructure/persistence/member.schema.ts';
import { projectsTable } from '@projects/infrastructure/persistence/project.schema.ts';

export const eventsTable = pgTable('events', {
  id: uuid().defaultRandom().primaryKey(),
  name: text().notNull(),
  description: text().notNull(),
  type: text().notNull(),
  startDate: text().notNull(),
  endDate: text().notNull(),
  location: text().notNull(),
  associatedProjectId: uuid().references(() => projectsTable.id, {
    onDelete: 'set null'
  }),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull()
});

export const eventMembershipsTable = pgTable('eventMemberships', {
  id: uuid().defaultRandom().primaryKey(),
  eventId: uuid().notNull().references(() => eventsTable.id, {
    onDelete: 'cascade'
  }),
  memberId: uuid().notNull().references(() => membersTable.id, {
    onDelete: 'cascade'
  }),
  eventRole: text().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull()
});

export const eventImagesTable = pgTable('eventImages', {
  id: uuid().defaultRandom().primaryKey(),
  eventId: uuid().notNull().references(() => eventsTable.id, {
    onDelete: 'cascade'
  }),
  imageUrl: text().notNull(),
  altText: text().notNull(),
  isMain: boolean().notNull().default(false),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull()
});

export const eventSocialLinksTable = pgTable('eventSocialLinks', {
  id: uuid().defaultRandom().primaryKey(),
  eventId: uuid().notNull().references(() => eventsTable.id, {
    onDelete: 'cascade'
  }),
  platform: text().notNull(),
  url: text().notNull(),
  label: text(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull()
});
