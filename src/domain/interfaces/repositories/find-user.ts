import { Prisma as IPrisma, User } from '@prisma/client';

export interface IFindUser {
  findUserGeneric(query: IPrisma.UserFindManyArgs): Promise<User | null>;
}
