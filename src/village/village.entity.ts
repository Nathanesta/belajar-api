import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Village {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  village_name: string;

  @Column()
  district_id: number;
}
