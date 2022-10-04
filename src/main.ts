import { sql } from './infra/db';

async function main() {
  const users = await sql`
    SELECT id, name
    FROM users;
  `;

  console.table(users);
}

try {
  main();
} catch (err) {
  console.error(err);
}
