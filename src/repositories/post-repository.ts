import { Post } from 'src/entities';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  public async getPosts(page: number) {
    return await this.createQueryBuilder('post')
      .leftJoinAndSelect('post.tags', 'tag')
      .skip(page * 3)
      .take(3)
      .getMany();
  }

  public async deletePost(postId: string) {
    await this.createQueryBuilder('post')
      .delete()
      .from(Post)
      .where('id = :postId', { postId })
      .execute();
  }
}
