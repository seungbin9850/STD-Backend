import { IsString } from 'class-validator';

export class GetPostsDTO {
  @IsString()
  page: string;
}
