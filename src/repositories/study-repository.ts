import { Study } from 'src/entities';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Study)
export class StudyRepository extends Repository<Study> {}
