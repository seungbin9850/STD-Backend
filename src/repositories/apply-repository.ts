import { Apply } from 'src/entities';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Apply)
export class ApplyRepository extends Repository<Apply> {}
