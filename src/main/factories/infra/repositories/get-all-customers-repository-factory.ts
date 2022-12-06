import { IGetAllCustomers } from '@/domain/interfaces';
import { GetAllCustomers } from '@/infra/prisma/repositories';

export const makeGetAllCustomersRepository = (): IGetAllCustomers => {
  return new GetAllCustomers();
};
