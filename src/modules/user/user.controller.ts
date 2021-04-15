import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/')
  public async createUser(@Body() req: CreateUserDTO) {
    await this.userService.createUser(req);
    return { status: 200, message: 'success' };
  }
}
