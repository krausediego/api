import { GetAllCustomers } from '@/domain/interfaces';
import { GetAllCustomersService } from '@/domain/services';
import { makeGetAllCustomersRepository } from '@/main/factories/infra';

export const makeGetAllCustomersService = (): GetAllCustomers => {
  return new GetAllCustomersService(makeGetAllCustomersRepository());
};
