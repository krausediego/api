import { IFindUser } from '@/domain/interfaces';
import { FindUser } from '@/infra/prisma/repositories';

export const makeFindUserRepository = (): IFindUser => {
  return new FindUser();
};
