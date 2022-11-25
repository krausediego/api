import { ISignUp } from '@/domain/interfaces';
import { SignUpRopository } from '@/infra/prisma/repositories';

export const makeSignUpRepository = (): ISignUp => {
  return new SignUpRopository();
};
