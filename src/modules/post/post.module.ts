import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ApplyRepository,
  PostRepository,
  TagRepository,
} from 'src/repositories';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostRepository, TagRepository, ApplyRepository]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
