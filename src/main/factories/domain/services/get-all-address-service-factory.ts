import { GetAllAddress } from '@/domain/interfaces';
import { GetAllAddressService } from '@/domain/services';
import { makeGetAllAddressRepository } from '../../infra';

export const makeGetAllAddressService = (): GetAllAddress => {
  return new GetAllAddressService(makeGetAllAddressRepository());
};
