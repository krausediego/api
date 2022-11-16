import { CreateUser } from '@/domain/interfaces';
import { CreateUserService } from '@/domain/services';

export const makeCreateUserService = (): CreateUser => {
  return new CreateUserService();
};
