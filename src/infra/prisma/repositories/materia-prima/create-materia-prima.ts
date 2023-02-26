import { ICreateMateriaPrima } from '@/domain/interfaces';
import { MateriaPrima } from '@prisma/client';

import { Prisma } from '../../prisma';

export class CreateMateriaPrima implements ICreateMateriaPrima {
  public async createNewMateriaPrima(
    materiaPrima: Omit<MateriaPrima, 'id'>,
  ): Promise<void> {
    try {
      await Prisma.materiaPrima.create({ data: materiaPrima });
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
