import { UpdateAddress } from '@/domain/interfaces';
import { UpdateAddressService } from '@/domain/services';
import { makeUpdateAddressRepository } from '../../infra/repositories/update-address-repository-factory';

export const makeUpdateAddressService = (): UpdateAddress => {
  return new UpdateAddressService(makeUpdateAddressRepository());
};
