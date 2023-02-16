import { SignIn } from '@/domain/interfaces';
import { SignInService } from '@/domain/services';
import {
  makeFindUserRepository,
  makeHash,
  makeToken,
} from '@/main/factories/infra';

export const makeSignInService = (): SignIn => {
  return new SignInService(makeFindUserRepository(), makeHash(), makeToken());
};
