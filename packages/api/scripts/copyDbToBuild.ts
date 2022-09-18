import fs from 'fs-extra';
import { join } from 'path';

fs.copy(
  join(__dirname, '../database.db'),
  join(__dirname, '../build/database.db')
)
  .then(() => console.log('Successfully moved database file'))
  .catch((error) => {
    console.error('🚀 ~ file: copyDbToBuild.ts ~ line 6 ~ error', error);
    throw error;
  });
