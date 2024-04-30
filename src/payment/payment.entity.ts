import { Transaction } from 'src/transaction/transaction.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  payment_name: string;

  @Column()
  bank_id: number;

  @ManyToOne((type) => Transaction, (transaction) => transaction.payment_id)
  transaction: Transaction[];
}
