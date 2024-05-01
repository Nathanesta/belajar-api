import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Menu } from 'src/menu/menu.entity';
import { User } from 'src/user/user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany((type) => Menu, (menu) => menu.role_id)
  menu: Menu[];

  @OneToMany((type) => User, (user) => user.role_id)
  user: User[];
}
