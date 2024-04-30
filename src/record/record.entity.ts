import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from 'src/user/user.entity';
import { DrugR } from 'src/drug_record/drug_record.entity';

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  way_to_come: string;

  @Column()
  vistting_time: Date;

  @Column()
  transportation: number;

  @Column()
  reference: string;

  @Column()
  person_responsible: string;

  @Column()
  traumatic: string;

  @Column()
  non_traumatic: string;

  @Column()
  conditions: string;

  @Column()
  complaint: Text;

  @Column()
  history_of_illness: Text;

  @Column()
  solution: Text;

  @Column()
  clinic_id: number;

  @Column()
  user_id: number;

  @OneToMany((type) => DrugR, (drugr) => drugr.medical_record_id)
  drugr: DrugR[];
}
