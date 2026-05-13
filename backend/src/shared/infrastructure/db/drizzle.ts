import { drizzle } from 'drizzle-orm/node-postgres';
import { DATABASE_URL } from '@config/env.ts';

export const db = drizzle(DATABASE_URL, { casing: 'snake_case' });
