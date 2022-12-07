import { IUpdateAddress } from '@/domain/interfaces';
import { UpdateAddressRepository } from '@/infra/prisma/repositories/update-address';

export const makeUpdateAddressRepository = (): IUpdateAddress => {
  return new UpdateAddressRepository();
};
