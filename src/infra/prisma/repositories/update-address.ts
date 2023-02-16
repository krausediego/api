import { IUpdateAddress } from '@/domain/interfaces';
import { Address } from '@prisma/client';

import { Prisma } from '../prisma';

export class UpdateAddressRepository implements IUpdateAddress {
  public async putAddress(address: Address): Promise<void> {
    const { id } = address;
    try {
      await Prisma.address.update({ data: address, where: { id } });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
