import internal from 'stream';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Profile } from 'src/profile/profile.entity';
import { Schedule } from 'src/schedule/schedule.entity';
import { Record } from 'src/record/record.entity';
import { Review } from 'src/review/review.entity';
import { Reply } from 'src/reply/reply.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  phone_number: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  created_at: Date;

  @Column()
  update_at: Date;

  @Column()
  role_id: string;

  @OneToOne((type) => Profile, (profile) => profile.user_id)
  profile: Profile[];

  @OneToMany((type) => Schedule, (schedule) => schedule.user_id)
  schedule: Schedule[];

  @OneToMany((type) => Record, (record) => record.user_id)
  record: Record[];

  @OneToMany((type) => Review, (review) => review.user_id)
  review: Review[];

  @OneToMany((type) => Reply, (reply) => reply.user_id)
  reply: Reply[];
}
