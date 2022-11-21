import { CreateUser } from '@/domain/interfaces';
import { CreateUserService } from '@/domain/services';
import { makeCreateUserRepository, makeHash } from '@/main/factories/infra';

export const makeCreateUserService = (): CreateUser => {
  return new CreateUserService(makeHash(), makeCreateUserRepository());
};
