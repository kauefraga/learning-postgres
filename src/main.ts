import { sql } from './infra/db';
import { logger } from './infra/logger';

async function main() {
  const users = await sql.file(`${__dirname}/query.sql`);

  console.time();
  console.table(users);
  console.timeEnd();
}

try {
  main();
} catch (err) {
  logger.error(err);
}
