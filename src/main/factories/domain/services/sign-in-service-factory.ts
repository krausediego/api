import { SignIn } from '@/domain/interfaces';
import { SignInService } from '@/domain/services';
import { makeFindUserRepository, makeHash, makeToken } from '../../infra';

export const makeSignInService = (): SignIn => {
  return new SignInService(makeFindUserRepository(), makeHash(), makeToken());
};
