import { IsString } from 'class-validator';

export class CreateStudyDTO {
  @IsString()
  postId: string;
}
