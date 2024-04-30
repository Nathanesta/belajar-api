import { Drug } from 'src/drug/drug.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category_name: string;

  @Column()
  description: Text;

  @OneToMany((type) => Drug, (drug) => drug.category_id)
  drug: Drug[];
}
