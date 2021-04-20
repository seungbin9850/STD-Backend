import { Injectable } from '@nestjs/common';
import { Member, Study } from 'src/entities';
import { HttpError } from 'src/exception';
import {
  ApplyRepository,
  MemberRepository,
  PostRepository,
  StudyRepository,
} from 'src/repositories';
import { makeId } from 'src/utils';
import { CreateStudyDTO } from './dto';

@Injectable()
export class StudyService {
  constructor(
    private readonly studyRepository: StudyRepository,
    private readonly memberRepository: MemberRepository,
    private readonly postRepository: PostRepository,
    private readonly applyRepository: ApplyRepository,
  ) {}

  async createStudy(req: CreateStudyDTO, userId: string) {
    const { postId } = req;
    const post = await this.postRepository.findOne(postId);
    if (post.userId !== userId) return new HttpError(409, 'Not Your Post');
    const study = new Study();
    study.id = await makeId();
    study.title = post.title;
    await this.studyRepository.save(study);
    const applies = await this.applyRepository.getAllApply(postId);
    for (let apply of applies) {
      const member = new Member();
      member.userId = apply.userId;
      member.studyId = study.id;
      await this.memberRepository.save(member);
    }
    await this.postRepository.deletePost(postId);
    await this.applyRepository.delete(postId);
  }
}
