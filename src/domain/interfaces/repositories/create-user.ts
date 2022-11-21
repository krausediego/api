import { User } from '@prisma/client';

export interface ICreateUser {
  createNewUser(user: Omit<User, 'id'>): Promise<void>;
}
