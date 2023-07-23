import { DataSource } from 'typeorm';
import { Actor } from '../entities/actor';

const dataSource = new DataSource({
  type: 'postgres',
  url: 'postgres://postgres:example@localhost:5432/postgres',
  entities: [Actor],
});

export const initialize = async () => {
  if (!dataSource.isInitialized) {
    dataSource.initialize();
  }

  return dataSource;
};
