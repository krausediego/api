import { GetCustomer } from '@/domain/interfaces';
import { GetCustomerService } from '@/domain/services';
import { makeGetCustomerRepository } from '@/main/factories/infra';

export const makeGetCustomerService = (): GetCustomer => {
  return new GetCustomerService(makeGetCustomerRepository());
};
