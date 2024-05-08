import { Payment } from 'src/modules/payment/payment.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: number;

  @Column()
  consultation: string;

  @Column()
  handling_fees: string;

  @Column('bigint')
  room_cost: string;

  @Column()
  payment_id: number;

  @OneToOne((type) => Payment, (payment) => payment.id)
  payment: Payment[];
}
