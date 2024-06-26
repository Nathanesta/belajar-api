import { Record } from 'src/modules/record/record.entity';
import { Room } from 'src/modules/room/room.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Clinic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clinic_name: string;

  @Column()
  address: string;

  @OneToMany((type) => Room, (room) => room.clinic_id)
  room: Room[];

  @OneToMany((type) => Record, (record) => record.clinic_id)
  record: Record[];
}
