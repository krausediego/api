import { SignIn } from '@/domain/interfaces';
import { SignInService } from '@/domain/services';

export const makeSignInService = (): SignIn => {
  return new SignInService();
};
