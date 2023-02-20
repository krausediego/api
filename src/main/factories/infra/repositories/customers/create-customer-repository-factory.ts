import { ICreateCustomer } from '@/domain/interfaces';
import { CreateCustomer } from '@/infra/prisma/repositories';

export const makeCreateCustomerRepository = (): ICreateCustomer => {
  return new CreateCustomer();
};
