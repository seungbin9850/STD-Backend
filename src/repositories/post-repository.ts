import { Post } from 'src/entities';
import { EntityRepository, getRepository, Repository } from 'typeorm';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  public async getPosts(page: number) {
    return await this.createQueryBuilder('post')
      .leftJoinAndSelect('post.tags', 'tag')
      .skip(page * 3)
      .take(3)
      .orderBy('post.createdAt', 'DESC')
      .getMany();
  }

  public async getAllPosts() {
    return await this.createQueryBuilder('post').getMany();
  }

  public async deletePost(postId: string) {
    await this.createQueryBuilder('post')
      .delete()
      .from(Post)
      .where('id = :postId', { postId })
      .execute();
  }

  public async searchPost(tag: string, page: number) {
    const qb = await getRepository(Post)
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.tags', 'tag');

    return qb
      .where(
        'post.id IN' +
          qb
            .subQuery()
            .select('*')
            .from(
              '(' +
                (await getRepository(Post)
                  .createQueryBuilder('post')
                  .select('post.id')
                  .leftJoin('post.tags', 'tag')
                  .where(`tag.tag = "${tag}"`)
                  .offset(page * 3)
                  .limit(3)
                  .orderBy('post.createdAt', 'DESC')
                  .getQuery()) +
                ')',
              'tmp',
            )
            .getQuery(),
      )
      .getMany();
  }
}
