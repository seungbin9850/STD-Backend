import { IsString, Length } from 'class-validator';

export class SigninDTO {
  @IsString()
  @Length(8, 20)
  readonly userId: string;

  @IsString()
  readonly password: string;
}
