import { Post } from 'src/entities';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {}
