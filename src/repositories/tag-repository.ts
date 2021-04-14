import { Tag } from 'src/entities';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Tag)
export class TagRepository extends Repository<Tag> {}
