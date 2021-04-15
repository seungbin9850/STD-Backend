import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Apply } from './apply';
import { Post } from './post';

@Entity()
export class User {
  @PrimaryColumn({ length: 45 })
  id: string;

  @Column({ name: 'user_id', length: 20, unique: true, nullable: false })
  userId: string;

  @Column({ length: 80, nullable: false })
  password: string;

  @Column({ length: 10, unique: true, nullable: false })
  nickname: string;

  @OneToMany((type) => Post, (post) => post.user)
  posts!: Post[];

  @OneToMany((type) => Apply, (apply) => apply.user)
  applies!: Apply[];
}
