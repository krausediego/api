import { ICreateUser } from '@/domain/interfaces';
import { User } from '@prisma/client';
import { Prisma } from '../prisma';
export class CreateUser implements ICreateUser {
  public async createNewUser(user: Omit<User, 'id'>): Promise<void> {
    try {
      await Prisma.user.create({ data: user });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
