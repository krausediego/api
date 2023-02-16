import { IGetCustomer } from '@/domain/interfaces';
import { GetCustomer } from '@/infra/prisma/repositories';

export const makeGetCustomerRepository = (): IGetCustomer => {
  return new GetCustomer();
};
