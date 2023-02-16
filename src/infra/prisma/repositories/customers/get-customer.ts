import { IGetCustomer } from '@/domain/interfaces';
import { Customer } from '@prisma/client';

import { Prisma } from '../../prisma';

export class GetCustomer implements IGetCustomer {
  public async findCustomer({
    customer_id,
  }: IGetCustomer.Params): Promise<Customer | null> {
    try {
      return await Prisma.customer.findUnique({
        where: {
          id: customer_id,
        },
        include: { address: true },
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
