import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Actor extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'actor_id' })
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @UpdateDateColumn({ name: 'last_update' })
  updatedAt: Date;
}
