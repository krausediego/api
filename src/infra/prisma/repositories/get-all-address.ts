import { IGetAllAddress } from '@/domain/interfaces';
import { Address } from '@prisma/client';

import { Prisma } from '../prisma';

export class GetAllAddress implements IGetAllAddress {
  public async findAllAddress({
    user_id,
  }: IGetAllAddress.Params): Promise<Address[]> {
    try {
      return await Prisma.address.findMany({ where: { user_id } });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
