import { UpdateAddress } from '@/domain/interfaces';
import { UpdateAddressService } from '@/domain/services';
import { makeUpdateAddressRepository } from '@/main/factories/infra';

export const makeUpdateAddressService = (): UpdateAddress => {
  return new UpdateAddressService(makeUpdateAddressRepository());
};
