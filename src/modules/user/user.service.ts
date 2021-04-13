import { Injectable } from '@nestjs/common';
import { User } from 'src/entities';
import { HttpError } from 'src/exception';
import { UserRepository } from 'src/repositories';
import { hash, makeId } from 'src/utils';
import { CreateUserDTO } from './dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(req: CreateUserDTO) {
    const { userId, password, nickname } = req;
    const exist = await this.userRepository.findOneUser(userId);
    if (exist) throw new HttpError(409, 'Already Exist User');
    const user = new User();
    user.id = await makeId();
    user.userId = userId;
    user.password = hash(password);
    user.nickname = nickname;
    await this.userRepository.save(user);
  }
}
