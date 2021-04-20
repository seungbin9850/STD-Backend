import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ApplyRepository,
  MemberRepository,
  PostRepository,
  StudyRepository,
} from 'src/repositories';
import { StudyController } from './study.controller';
import { StudyService } from './study.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      StudyRepository,
      MemberRepository,
      PostRepository,
      ApplyRepository,
    ]),
  ],
  controllers: [StudyController],
  providers: [StudyService],
})
export class StudyModule {}
