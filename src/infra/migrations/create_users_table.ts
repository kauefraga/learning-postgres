import { sql } from '../db';
import { logger } from '../logger';

export async function createUsersTable() {
  logger.info('creating users table');

  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL
    )
  `;
}
