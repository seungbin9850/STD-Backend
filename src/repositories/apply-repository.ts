import { Apply } from 'src/entities';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Apply)
export class ApplyRepository extends Repository<Apply> {
  public async deleteApply(data: { userId: string; postId: string }) {
    await this.createQueryBuilder('apply')
      .delete()
      .from(Apply)
      .where('post_id = :postId', { postId: data.postId })
      .andWhere('user_id = :userId', { userId: data.userId })
      .execute();
  }

  public async getAllApply(postId: string) {
    return await this.createQueryBuilder('apply')
      .where('post_id := postId', { postId })
      .getMany();
  }
}
