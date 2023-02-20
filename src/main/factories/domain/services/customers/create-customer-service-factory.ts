import { CreateCustomer } from '@/domain/interfaces';
import { CreateCustomerService } from '@/domain/services';
import { makeCreateCustomerRepository } from '@/main/factories/infra';

export const makeCreateCustomerService = (): CreateCustomer => {
  return new CreateCustomerService(makeCreateCustomerRepository());
};
