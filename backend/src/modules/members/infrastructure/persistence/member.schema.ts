import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const membersTable = pgTable('members', {
  id: uuid().defaultRandom().primaryKey(),
  firstName: text().notNull(),
  lastName: text().notNull(),
  birthDate: text().notNull(),
  phoneNumber: text().notNull(),
  enrollmentNumber: text().notNull(),
  address: text().notNull(),
  entryPeriod: text().notNull(),
  faculty: text().notNull(),
  degree: text().notNull(),
  clubPosition: text().notNull(),
  email: text().notNull().unique(),
  githubUsername: text().notNull(),
  linkedinUrl: text().notNull(),
  department: text().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull()
});
