import { ICreateAddress } from '@/domain/interfaces';
import { CreateAddress } from '@/infra/prisma/repositories';

export const makeCreateAddressRepository = (): ICreateAddress => {
  return new CreateAddress();
};
