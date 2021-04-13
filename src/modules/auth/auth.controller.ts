import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDTO } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/')
  public async signin(@Body() req: SigninDTO) {
    const token = await this.authService.signin(req);
    return { status: 200, message: 'success', data: { token } };
  }
}
