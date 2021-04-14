import { CanActivate, ExecutionContext } from '@nestjs/common';
import { HttpError } from 'src/exception';
import { verifyToken } from 'src/utils';

export class AuthGuard implements CanActivate {
  public canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;
    if (!authorization) throw new HttpError(401, 'Token Required');
    request.decoded = this.validateToken(authorization.split('Bearer ')[1]);
    return true;
  }

  public validateToken(token: string) {
    try {
      const verify = verifyToken(token);
      return verify;
    } catch (e) {
      throw new HttpError(403, 'Invalid Token');
    }
  }
}
