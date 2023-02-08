import { IGetAllCustomers } from '@/domain/interfaces';
import { Customer } from '@prisma/client';
import { Prisma } from '../prisma';

export class GetAllCustomers implements IGetAllCustomers {
  constructor() {}

  public async findAllCustomers({
    user_id,
    search,
  }: IGetAllCustomers.Params): Promise<Customer[]> {
    try {
      return await Prisma.customer.findMany({
        where: {
          user_id,
          AND: [
            {
              OR: [
                { email: { contains: search, mode: 'insensitive' } },
                { name: { contains: search, mode: 'insensitive' } },
              ],
            },
          ],
        },
        include: { address: true },
        orderBy: { name: 'asc' },
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
