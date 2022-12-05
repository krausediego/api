import { Middleware } from '@/application/interfaces';
import { CreateCustomerValidator } from '@/application/validators';

export const makeCreateCustomerValidator = (): Middleware => {
  return new CreateCustomerValidator();
};
