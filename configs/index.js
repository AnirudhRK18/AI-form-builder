import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from './schema.js'

const sql = neon('postgresql://Ai%20form%20builder_owner:s5efGqQy3vHz@ep-shrill-bread-a5et1lzs.us-east-2.aws.neon.tech/Ai%20form%20builder?sslmode=require');
export const db = drizzle({ client: sql },{schema});
