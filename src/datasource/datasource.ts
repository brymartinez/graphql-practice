import { DataSource } from 'typeorm';
import { Actor } from '../entities/actor';

export class DataService {
  dataSource: DataSource;

  constructor() {
    this.dataSource = new DataSource({
      type: 'postgres',
      url: 'postgres://postgres:example@localhost:5432/postgres',
      entities: [Actor],
    });

  }
}
