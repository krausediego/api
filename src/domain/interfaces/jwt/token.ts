import { User } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';

export interface Token {
  generateToken(user: Omit<User, 'password'>): string;
  verifyToken(token: string): string | JwtPayload;
}
