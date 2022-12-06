import { IGetAllCustomers } from '@/domain/interfaces';
import { Customer } from '@prisma/client';
import { Prisma } from '../prisma';

export class GetAllCustomers implements IGetAllCustomers {
  constructor() {}

  public async findAllCustomers({
    user_id,
  }: IGetAllCustomers.Params): Promise<Customer[]> {
    try {
      return await Prisma.customer.findMany({
        where: {
          user_id,
        },
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
