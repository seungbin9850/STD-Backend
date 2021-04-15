import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Post } from './post';
import { User } from './user';

@Entity()
export class Apply {
  @PrimaryColumn({ name: 'post_id', length: 45 })
  postId: string;

  @PrimaryColumn({ name: 'user_id', length: 45 })
  userId: string;

  @ManyToOne((type) => Post, (post) => post.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'post_id' })
  post: Post;

  @ManyToOne((type) => User, (user) => user.id, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
