import { DataSource } from 'typeorm';
import { Actor } from '../entities/actor';
import { ActorInfo } from '../entities/actorInfo';
import { City } from '../entities/city';
import { Country } from '../entities/country';

const dataSource = new DataSource({
  type: 'postgres',
  url: 'postgres://postgres:example@localhost:5432/postgres',
  entities: [Actor, ActorInfo, City, Country],
});

export const initialize = async () => {
  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }

  return dataSource;
};
