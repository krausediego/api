import { GetAllCustomers } from '@/domain/interfaces';
import { GetAllCustomersService } from '@/domain/services';
import { makeGetAllCustomersRepository } from '../../infra/repositories/get-all-customers-repository-factory';

export const makeGetAllCustomersService = (): GetAllCustomers => {
  return new GetAllCustomersService(makeGetAllCustomersRepository());
};
