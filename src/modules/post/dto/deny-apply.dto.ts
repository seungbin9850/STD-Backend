import { IsString } from 'class-validator';

export class DenyApplyDTO {
  @IsString()
  postId: string;

  @IsString()
  userId: string;
}
