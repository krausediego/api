import { CreateCustomer } from '@/domain/interfaces';
import { CreateCustomerService } from '@/domain/services';

export const makeCreateCustomerService = (): CreateCustomer => {
  return new CreateCustomerService();
};
