import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { City } from './city';

@Entity()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'country_id' })
  id: number;

  @Column({ name: 'country' })
  country: string;

  @UpdateDateColumn({ name: 'last_update' })
  updatedAt: Date;

  @OneToMany(() => City, (city) => city.country)
  cities: City[];
}
