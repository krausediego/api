import { GetAllAddressController } from '@/application/controllers';
import { Controller } from '@/application/interfaces';
import { makeGetAllAddressService } from '@/main/factories/domain';

export const makeGetAllAddressController = (): Controller => {
  return new GetAllAddressController(makeGetAllAddressService);
};
