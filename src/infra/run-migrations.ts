import { createUsersTable } from './migrations/create_users_table';
import { insertUsers } from './migrations/insert_users';

// factory pattern
async function migrationsRunner() {
  createUsersTable();
  insertUsers([
    {
      name: 'Ana <3',
    },
    {
      name: 'O Melhor',
    },
    {
      name: 'The Best',
    },
    {
      name: 'A Melhor',
    },
    {
      name: 'Carlos',
    },
    {
      name: 'Antônio',
    },
    {
      name: 'Jonas',
    },
    {
      name: 'claramente niwba',
    },
    {
      name: 'Kauê',
    },
    {
      name: 'Aron <3<3<3<3',
    },
  ]);
}

migrationsRunner();
