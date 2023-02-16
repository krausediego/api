import { CreateAddress } from '@/domain/interfaces';
import { CreateAddressService } from '@/domain/services';
import { makeCreateAddressRepository } from '@/main/factories/infra';

export const makeCreateAddressService = (): CreateAddress => {
  return new CreateAddressService(makeCreateAddressRepository());
};
