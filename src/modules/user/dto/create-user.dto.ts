import { IsString, Length } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @Length(8, 20)
  readonly userId: string;

  @IsString()
  readonly password: string;

  @IsString()
  @Length(2, 10)
  readonly nickname: string;
}
