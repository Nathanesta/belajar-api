import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  consultation: string;

  @Column()
  handling_fees: number;

  @Column()
  room_cost: number;

  @Column()
  payment_id: number;
}
