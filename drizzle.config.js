import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './configs/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://Ai%20form%20builder_owner:s5efGqQy3vHz@ep-shrill-bread-a5et1lzs.us-east-2.aws.neon.tech/Ai%20form%20builder?sslmode=require',
  },
});
