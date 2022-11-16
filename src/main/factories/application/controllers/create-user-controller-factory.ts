import { CreateUserController } from '@/application/controllers';
import { Controller } from '@/application/interfaces';
import { makeCreateUserService } from '@/main/factories/domain';

export const makeCreateUserController = (): Controller => {
  return new CreateUserController(makeCreateUserService);
};
