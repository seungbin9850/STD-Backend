import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Member } from './member';

@Entity()
export class Study {
  @PrimaryColumn({ length: 45 })
  id: string;

  @Column({ length: 50 })
  title: string;

  @OneToMany((type) => Member, (member) => member.study)
  members!: Member[];
}
