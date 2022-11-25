import { User } from '@prisma/client';

export interface ISignUp {
  createNewUser(user: Omit<User, 'id'>): Promise<void>;
}
