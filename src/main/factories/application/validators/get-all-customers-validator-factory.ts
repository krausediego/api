import { Middleware } from '@/application/interfaces';
import { GetAllCustomersValidator } from '@/application/validators';

export const makeGetAllCustomersValidator = (): Middleware => {
  return new GetAllCustomersValidator();
};
