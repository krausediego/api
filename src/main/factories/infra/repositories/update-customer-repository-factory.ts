import { IUpdateCustomer } from '@/domain/interfaces';
import { UpdateCustomer } from '@/infra/prisma/repositories';

export const makeUpdateCustomerRepository = (): IUpdateCustomer => {
  return new UpdateCustomer();
};
