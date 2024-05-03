import { Payment } from 'src/modules/payment/payment.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Bank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bank_name: string;

  @Column()
  account_number: number;

  @Column()
  bank_images: string;

  // @ManyToOne((type) => Payment, (payment) => payment.bank_id)
  // payment: Payment[];
}
