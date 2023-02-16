import { User } from '@prisma/client';

export interface ISignUp {
  createNewUser(
    user: Omit<User, 'id' | 'created_at' | 'updated_at'>,
  ): Promise<void>;
}
