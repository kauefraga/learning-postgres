import { logger } from './logger';
import { createUsersTable } from './migrations/create_users_table';
import { insertUsers } from './migrations/insert_users';

// factory pattern
async function migrationsRunner() {
  await createUsersTable();

  await insertUsers([
    { name: 'Ana <3' },
    { name: 'O Melhor' },
    { name: 'Carlos' },
    { name: 'Jonas' },
    { name: 'Kauê' },
    { name: 'Aron <3<3<3<3' },
  ]);
}

try {
  migrationsRunner();
} catch (e: any) {
  logger.error(e.message);
}
