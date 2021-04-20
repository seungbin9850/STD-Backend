import { Member } from 'src/entities';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Member)
export class MemberRepository extends Repository<Member> {}
