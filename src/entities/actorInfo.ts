import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ActorInfo extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'actor_id' })
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'film_info' })
  filmInfo: string;
}
