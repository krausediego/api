import { Address } from '@prisma/client';

export interface IUpdateAddress {
  putAddress(address: Address): Promise<void>;
}
