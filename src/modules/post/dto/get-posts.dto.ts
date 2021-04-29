import { IsOptional, IsString } from 'class-validator';

export class GetPostsDTO {
  @IsString()
  page: string;

  @IsString()
  @IsOptional()
  tag: string;
}
