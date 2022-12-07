import { CreateAddress } from '@/domain/interfaces';
import { CreateAddressService } from '@/domain/services';
import { makeCreateAddressRepository } from '../../infra';

export const makeCreateAddressService = (): CreateAddress => {
  return new CreateAddressService(makeCreateAddressRepository());
};
