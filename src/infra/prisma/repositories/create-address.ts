import { ICreateAddress } from '@/domain/interfaces';
import { Address } from '@prisma/client';
import { Prisma } from '../prisma';

export class CreateAddress implements ICreateAddress {
  constructor() {}

  public async createNewAddress(
    address: Omit<Address, 'id'>,
  ): Promise<Address> {
    try {
      return await Prisma.address.create({ data: address });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
