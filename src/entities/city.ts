import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Country } from './country';

@Entity()
export class City extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'city_id' })
  id: number;

  @Column({ name: 'city' })
  city: string;

  @Column({ name: 'country_id' })
  countryId: number;

  @UpdateDateColumn({ name: 'last_update' })
  updatedAt: Date;

  @ManyToOne(() => Country, (country) => country.cities)
  @JoinColumn({ name: 'country_id' })
  country: Country;
}
