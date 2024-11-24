import { serial, text, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";


export const forms=pgTable('forms',{
  id:serial('id').primaryKey(),
  jsonform:text('jsonform').notNull(),
  createddate:varchar('createdAt').notNull()
})