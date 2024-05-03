import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MedicalRecordDrug } from 'src/modules/medical_record_drug/medical_record_drug.entity';

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

  @Column('text')
  complaint: string;

  @Column('text')
  history_of_illness: string;

  @Column('text')
  solution: string;

  @Column()
  clinic_id: number;

  @Column()
  user_id: number;

  @OneToMany(
    (type) => MedicalRecordDrug,
    (medical_record_drug) => medical_record_drug.id,
  )
  medical_record_drug: MedicalRecordDrug[];
}