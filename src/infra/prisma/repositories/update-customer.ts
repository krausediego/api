import { IUpdateCustomer } from '@/domain/interfaces';
import { Customer } from '@prisma/client';
import { Prisma } from '../prisma';

export class UpdateCustomer implements IUpdateCustomer {
  constructor() {}

  public async putCustomer(customer: Customer): Promise<void> {
    const { id } = customer;
    try {
      await Prisma.customer.update({ data: customer, where: { id } });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
