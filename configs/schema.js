import { boolean, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const forms = pgTable('forms', {
  id: serial('id').primaryKey(),
  jsonform: text('jsonform').notNull(),
  createdAt: varchar('createdAt').notNull(),
});

export const usersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  verified: boolean('verified').notNull().default(false),
});