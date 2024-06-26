import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { City } from 'src/modules/city/city.entity';
import { Village } from 'src/modules/village/village.entity';

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

  @ManyToOne((type) => City, (city) => city.id)
  city: City[];
}
