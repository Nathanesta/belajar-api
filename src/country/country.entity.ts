import { Profile } from 'src/profile/profile.entity';
import { Region } from 'src/region/region.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  country_name: string;

  @OneToMany((type) => Profile, (profile) => profile.country_id)
  profile: Profile;

  @OneToMany((type) => Region, (region) => region.country_id)
  region: Region;
}
