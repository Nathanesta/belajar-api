import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserR {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  role_id: number;
}
