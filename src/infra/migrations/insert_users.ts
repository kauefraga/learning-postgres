import cuid from 'cuid';
import { sql } from '../db';
import { logger } from '../logger';

interface InsertUserRequest {
  name: string;
}

export async function insertUsers(users?: InsertUserRequest[]) {
  logger.info('inserting users');

  users?.forEach(async (user) => {
    await sql`
      INSERT INTO users (
        id, name
      ) VALUES (
        ${cuid()},
        ${user.name}
      )
    `;
  });
}
