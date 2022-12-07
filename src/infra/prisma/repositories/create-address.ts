import { ICreateAddress } from '@/domain/interfaces';
import { Address } from '@prisma/client';
import { Prisma } from '../prisma';

export class CreateAddress implements ICreateAddress {
  constructor() {}

  public async createNewAddress(customer: Omit<Address, 'id'>): Promise<void> {
    try {
      await Prisma.address.create({ data: customer });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
