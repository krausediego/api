import { Middleware } from '@/application/interfaces';
import { UpdateAddressValidator } from '@/application/validators';

export const makeUpdateAddressValidator = (): Middleware => {
  return new UpdateAddressValidator();
};
