import { IGetAllAddress } from '@/domain/interfaces';
import { GetAllAddress } from '@/infra/prisma/repositories';

export const makeGetAllAddressRepository = (): IGetAllAddress => {
  return new GetAllAddress();
};
