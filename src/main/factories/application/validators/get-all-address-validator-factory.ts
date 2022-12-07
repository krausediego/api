import { Middleware } from '@/application/interfaces';
import { GetAllAddressValidator } from '@/application/validators';

export const makeGetAllAddressValidator = (): Middleware => {
  return new GetAllAddressValidator();
};
