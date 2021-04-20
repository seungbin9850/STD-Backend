import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Study } from './study';
import { User } from './user';

@Entity()
export class Member {
  @PrimaryColumn({ name: 'study_id', length: 45 })
  studyId: string;

  @PrimaryColumn({ name: 'user_id', length: 45 })
  userId: string;

  @ManyToOne((type) => Study, (study) => study.id, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'study_id' })
  study!: Study;

  @ManyToOne((type) => User, (user) => user.id, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
