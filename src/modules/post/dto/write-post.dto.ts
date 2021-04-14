import { IsArray, IsString, Length, MaxLength } from 'class-validator';

export class WritePostDTO {
  @IsString()
  @Length(0, 50)
  title: string;

  @IsString()
  @MaxLength(500)
  content: string;

  @IsArray()
  tags: string[];
}
