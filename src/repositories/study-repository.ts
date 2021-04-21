import { Study } from 'src/entities';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Study)
export class StudyRepository extends Repository<Study> {
  public async getMyStudy(userId: string) {
    return await this.createQueryBuilder('study')
      .leftJoinAndSelect('study.members', 'member', 'user_id = :userId', {
        userId,
      })
      .getMany();
  }
}
