import { SignUp } from '@/domain/interfaces';
import { SignUpService } from '@/domain/services';
import { makeSignUpRepository, makeHash } from '@/main/factories/infra';

export const makeSignUpService = (): SignUp => {
  return new SignUpService(makeHash(), makeSignUpRepository());
};
