import { CreateAddressController } from '@/application/controllers';
import { Controller } from '@/application/interfaces';
import { makeCreateAddressService } from '../../domain';

export const makeCreateAddressController = (): Controller => {
  return new CreateAddressController(makeCreateAddressService);
};
