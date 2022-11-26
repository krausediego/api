import { SignInController } from '@/application/controllers';
import { Controller } from '@/application/interfaces';
import { makeSignInService } from '@/main/factories/domain';

export const makeSignInController = (): Controller => {
  return new SignInController(makeSignInService);
};
