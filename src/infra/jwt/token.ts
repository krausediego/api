import jwt, { JwtPayload } from 'jsonwebtoken';

import { Token as IToken } from '@/domain/interfaces';
import secret from '@/main/config/environments/token';
import { User } from '@prisma/client';

export class Token implements IToken {
  public generateToken(user: Omit<User, 'password'>): string {
    return jwt.sign(user, secret.secret as string, { expiresIn: '20d' });
  }

  public verifyToken(token: string): string | JwtPayload {
    return jwt.verify(token, secret.secret as string);
  }
}
