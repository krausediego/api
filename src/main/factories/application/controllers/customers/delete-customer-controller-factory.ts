import { DeleteCustomerController } from '@/application/controllers';
import { Controller } from '@/application/interfaces';
import { makeDeleteCustomerService } from '@/main/factories/domain';

export const makeDeleteCustomerController = (): Controller => {
  return new DeleteCustomerController(makeDeleteCustomerService);
};
