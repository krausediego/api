import { ICreateCustomer } from '@/domain/interfaces';
import { Customer } from '@prisma/client';
import { Prisma } from '../prisma';

export class CreateCustomer implements ICreateCustomer {
  constructor() {}

  public async createNewCustomer(
    customer: Omit<Customer, 'id'>,
  ): Promise<void> {
    try {
      await Prisma.customer.create({ data: customer });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
