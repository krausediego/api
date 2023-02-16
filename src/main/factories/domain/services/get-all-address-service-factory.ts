import { GetAllAddress } from '@/domain/interfaces';
import { GetAllAddressService } from '@/domain/services';
import { makeGetAllAddressRepository } from '@/main/factories/infra';

export const makeGetAllAddressService = (): GetAllAddress => {
  return new GetAllAddressService(makeGetAllAddressRepository());
};
