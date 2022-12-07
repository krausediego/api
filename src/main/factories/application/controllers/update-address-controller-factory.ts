import { UpdateAddressController } from '@/application/controllers';
import { Controller } from '@/application/interfaces';
import { makeUpdateAddressService } from '../../domain';

export const makeUpdateAddressController = (): Controller => {
  return new UpdateAddressController(makeUpdateAddressService);
};
