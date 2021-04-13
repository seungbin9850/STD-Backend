import { Entity, PrimaryColumn, Column } from 'typeorm';

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
}
