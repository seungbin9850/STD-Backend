import { Injectable } from '@nestjs/common';
import { Post, Tag } from 'src/entities';
import { PostRepository, TagRepository } from 'src/repositories';
import { makeId } from 'src/utils';
import { WritePostDTO } from './dto/write-post.dto';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly tagRepository: TagRepository,
  ) {}

  async writePost(req: WritePostDTO, decoded: any) {
    const { title, content, tags } = req;
    const postId: string = await makeId();

    const post = new Post();
    post.id = postId;
    post.title = title;
    post.content = content;
    post.userId = decoded.id;
    await this.postRepository.save(post);

    for (let tagItem of tags) {
      const tag = new Tag();
      const id = await makeId();
      tag.id = id;
      tag.postId = postId;
      tag.tag = tagItem;
      await this.tagRepository.save(tag);
    }
  }
}
