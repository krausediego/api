import { ICreateUser } from '@/domain/interfaces';
import { CreateUser } from '@/infra/prisma/repositories';

export const makeCreateUserRepository = (): ICreateUser => {
  return new CreateUser();
};
