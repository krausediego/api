import { Middleware } from '@/application/interfaces';
import { CreateAddressValidator } from '@/application/validators';

export const makeCreateAddressValidator = (): Middleware => {
  return new CreateAddressValidator();
};
