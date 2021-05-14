import { Tag } from 'src/entities';
import { EntityRepository, getRepository, Repository } from 'typeorm';

@EntityRepository(Tag)
export class TagRepository extends Repository<Tag> {
  public async findAllTag(tag: string) {
    return await getRepository(Tag)
      .createQueryBuilder('tag')
      .where('tag.tag = :tag', { tag })
      .getMany();
  }
}
