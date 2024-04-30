import { Village } from 'src/village/village.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class District {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  district_name: string;

  @Column()
  city_id: number;

  @OneToMany((type) => Village, (village) => village.district_id)
  village: Village[];
}
