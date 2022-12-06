import { UpdateCustomer } from '@/domain/interfaces';
import { UpdateCustomerService } from '@/domain/services';
import { makeUpdateCustomerRepository } from '@/main/factories/infra';

export const makeUpdateCustomerService = (): UpdateCustomer => {
  return new UpdateCustomerService(makeUpdateCustomerRepository());
};
