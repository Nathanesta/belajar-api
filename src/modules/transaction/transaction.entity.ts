import { Payment } from 'src/modules/payment/payment.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  consultation: string;

  @Column()
  handling_fees: number;

  @Column()
  room_cost: number;

  @Column()
  payment_id: number;

  @OneToOne((type) => Payment, (payment) => payment.id)
  payment: Payment[];
}
