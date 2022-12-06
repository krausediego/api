import { Middleware } from '@/application/interfaces';
import { UpdateCustomerValidator } from '@/application/validators';

export const makeUpdateCustomerValidator = (): Middleware => {
  return new UpdateCustomerValidator();
};
