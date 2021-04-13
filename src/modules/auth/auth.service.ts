import { Injectable } from '@nestjs/common';
import { HttpError } from 'src/exception';
import { UserRepository } from 'src/repositories';
import { compare, makeToken } from 'src/utils';
import { SigninDTO } from './dto';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async signin(req: SigninDTO) {
    const { userId, password } = req;
    const user = await this.userRepository.findOneUser(userId);
    if (!user) throw new HttpError(404, 'User Not Found');
    const check = compare(password, user.password);
    if (!check) throw new HttpError(401, 'Password Incorrect');
    const accessToken = makeToken(user.id);
    return accessToken;
  }
}
