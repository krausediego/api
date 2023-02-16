import { CreateAddressController } from '@/application/controllers';
import { Controller } from '@/application/interfaces';
import { makeCreateAddressService } from '@/main/factories/domain';

export const makeCreateAddressController = (): Controller => {
  return new CreateAddressController(makeCreateAddressService);
};
