import { SignUpController } from '@/application/controllers';
import { Controller } from '@/application/interfaces';
import { makeSignUpService } from '@/main/factories/domain';

export const makeSignUpController = (): Controller => {
  return new SignUpController(makeSignUpService);
};
