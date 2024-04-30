import { District } from 'src/district/district.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city_name: string;

  @Column()
  region_id: number;

  @OneToMany((type) => District, (district) => district.city_id)
  district: District[];
}
