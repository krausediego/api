import { IDeleteCustomer } from '@/domain/interfaces';

import { Prisma } from '../../prisma';

export class DeleteCustomer implements IDeleteCustomer {
  public async deleteCustomer(
    customer_id: string,
    address_id: string,
  ): Promise<void> {
    try {
      await Prisma.customer.delete({ where: { id: customer_id } });
      await Prisma.address.delete({ where: { id: address_id } });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
