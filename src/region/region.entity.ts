import { City } from 'src/city/city.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Region {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  region_name: string;

  @Column()
  country_id: number;

  @OneToMany((type) => City, (city) => city.region_id)
  city: City[];
}
