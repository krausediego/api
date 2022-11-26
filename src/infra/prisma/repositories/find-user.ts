import { IFindUser } from '@/domain/interfaces';
import { Prisma as IPrisma, User } from '@prisma/client';
import { Prisma } from '../prisma';

export class FindUser implements IFindUser {
  constructor() {}

  public async findUserGeneric(
    query: IPrisma.UserFindFirstArgs,
  ): Promise<User | null> {
    try {
      return await Prisma.user.findFirst(query);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
