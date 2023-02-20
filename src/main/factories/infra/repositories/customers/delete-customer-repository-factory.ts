import { IDeleteCustomer } from '@/domain/interfaces';
import { DeleteCustomer } from '@/infra/prisma/repositories';

export const makeDeleteCustomerRepository = (): IDeleteCustomer => {
  return new DeleteCustomer();
};
