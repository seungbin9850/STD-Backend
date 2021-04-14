import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Tag } from './tag';
import { User } from './user';

@Entity()
export class Post {
  @PrimaryColumn({ length: 45 })
  id: string;

  @Column({ length: 50, nullable: false })
  title: string;

  @Column({ length: 500, nullable: false })
  content: string;

  @Column({ name: 'user_id', length: 45 })
  userId: string;

  @ManyToOne((type) => User, (user) => user.id, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @OneToMany((type) => Tag, (tag) => tag.post)
  tags!: Tag[];
}
