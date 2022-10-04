import { sql } from '../db';

interface InsertUserRequest {
  name: string;
}

export async function insertUsers(users?: InsertUserRequest[]) {
  users?.forEach(async (user) => {
    await sql`
      INSERT INTO users (
        name
      ) VALUES (
        ${user.name}
      )
    `;
  });
}
