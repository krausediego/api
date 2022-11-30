import { Token as IToken } from '@/domain/interfaces';
import { User } from '@prisma/client';
import secret from '@/main/config/environments/token';
import jwt, { JwtPayload } from 'jsonwebtoken';

export class Token implements IToken {
  constructor() {}

  public generateToken(user: Omit<User, 'password'>): string {
    return jwt.sign(user, secret.secret as string, { expiresIn: '30s' });
  }

  public verifyToken(token: string): string | JwtPayload {
    return jwt.verify(token, secret.secret as string);
  }
}
