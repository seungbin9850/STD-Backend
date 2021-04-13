import { User } from 'src/entities';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async findOneUser(userId: string): Promise<User> {
    return await this.createQueryBuilder()
      .where('user_id = :userId', { userId })
      .getOne();
  }
}
