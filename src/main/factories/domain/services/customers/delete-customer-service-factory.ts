import { DeleteCustomer } from '@/domain/interfaces';
import { DeleteCustomerService } from '@/domain/services';
import { makeDeleteCustomerRepository } from '@/main/factories/infra';

export const makeDeleteCustomerService = (): DeleteCustomer => {
  return new DeleteCustomerService(makeDeleteCustomerRepository());
};
