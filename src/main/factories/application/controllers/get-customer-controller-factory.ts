import { GetCustomerController } from '@/application/controllers';
import { Controller } from '@/application/interfaces';
import { makeGetCustomerService } from '@/main/factories/domain';

export const makeGetCustomerController = (): Controller => {
  return new GetCustomerController(makeGetCustomerService);
};
