import { JwtPayload } from 'jsonwebtoken';

import { User } from '@prisma/client';

export interface Token {
  generateToken(user: Omit<User, 'password'>): string;
  verifyToken(token: string): string | JwtPayload;
}
