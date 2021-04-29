import { Injectable } from '@nestjs/common';
import { Apply, Post, Tag } from 'src/entities';
import { HttpError } from 'src/exception';
import {
  ApplyRepository,
  PostRepository,
  TagRepository,
} from 'src/repositories';
import { makeId } from 'src/utils';
import { ApplyPostDTO, DenyApplyDTO } from './dto';
import { GetPostsDTO } from './dto/get-posts.dto';
import { WritePostDTO } from './dto/write-post.dto';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly tagRepository: TagRepository,
    private readonly applyRepository: ApplyRepository,
  ) {}

  async writePost(req: WritePostDTO, userId: string) {
    const { title, content, tags } = req;
    const postId: string = await makeId();

    const post = new Post();
    post.id = postId;
    post.title = title;
    post.content = content;
    post.userId = userId;
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

  async getPosts(req: GetPostsDTO) {
    try {
      const { tag, page } = req;
      if (tag) return await this.postRepository.searchPost(tag, Number(page));
      return await this.postRepository.getPosts(Number(page));
    } catch (e) {
      console.log(e.message);
    }
  }

  async applyPost(req: ApplyPostDTO, userId: string) {
    const { postId } = req;
    const apply = new Apply();
    apply.postId = postId;
    apply.userId = userId;
    await this.applyRepository.save(apply);
  }

  async denyApply(req: DenyApplyDTO, userId: string) {
    const post = await this.postRepository.findOne({ id: req.postId });
    if (post.userId !== userId) throw new HttpError(409, 'Not Your Post');
    await this.applyRepository.deleteApply(req);
  }
}
