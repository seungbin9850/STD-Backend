import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostRepository, TagRepository } from 'src/repositories';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostRepository, TagRepository])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
