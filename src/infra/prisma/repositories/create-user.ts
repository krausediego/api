import { ICreateUser } from '@/domain/interfaces';
import { User } from '@prisma/client';
import { Prisma as PrismaError } from '@prisma/client';
import { Prisma } from '../prisma';
export class CreateUser implements ICreateUser {
  constructor() {}

  async createNewUser(user: Omit<User, 'id'>): Promise<void> {
    try {
      await Prisma.user.create({ data: user });
    } catch (error: any) {
      if (error instanceof PrismaError.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new Error('Algum dos campos ja esta em uso');
        } else {
          throw new Error('Erro inesperado');
        }
      }
    }
  }
}
