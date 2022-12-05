import { CreateCustomer } from '@/domain/interfaces';
import { CreateCustomerService } from '@/domain/services';
import { makeCreateCustomerRepository } from '../../infra/repositories/create-customer-repository-factory';

export const makeCreateCustomerService = (): CreateCustomer => {
  return new CreateCustomerService(makeCreateCustomerRepository());
};
