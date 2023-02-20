import { CreateCustomerController } from '@/application/controllers';
import { Controller } from '@/application/interfaces';
import { makeCreateCustomerService } from '@/main/factories/domain';

export const makeCreateCustomerController = (): Controller => {
  return new CreateCustomerController(makeCreateCustomerService);
};
