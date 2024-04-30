import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { DrugR } from 'src/drug_record/drug_record.entity';
import { Review } from 'src/review/review.entity';

@Entity()
export class Drug {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  drug_name: string;

  @Column()
  stock: number;

  @Column()
  drug_summary: Text;

  @Column()
  buy_price: number;

  @Column()
  sell_price: number;

  @Column()
  category_id: number;

  @ManyToMany((type) => DrugR, (drugr) => drugr.drug_id)
  drugr: DrugR[];

  @OneToMany((type) => Review, (review) => review.drug_id)
  drug: Drug[];
}
