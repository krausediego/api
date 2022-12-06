import { UpdateCustomerController } from '@/application/controllers';
import { Controller } from '@/application/interfaces';
import { makeUpdateCustomerService } from '@/main/factories/domain';

export const makeUpdateCustomerController = (): Controller => {
  return new UpdateCustomerController(makeUpdateCustomerService);
};
