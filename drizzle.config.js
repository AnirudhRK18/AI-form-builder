import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './configs/schema.js', // Ensure this path is correct
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_MONGO_URI,
  },
});
