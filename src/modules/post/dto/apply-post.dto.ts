import { IsString } from 'class-validator';

export class ApplyPostDTO {
  @IsString()
  postId: string;
}
