import { IGetAllMateriasPrimas } from '@/domain/interfaces';
import { MateriaPrima } from '@prisma/client';

import { Prisma } from '../../prisma';

export class GetAllMateriasPrimas implements IGetAllMateriasPrimas {
  public async findAllMateriasPrimas({
    user_id,
    search,
  }: IGetAllMateriasPrimas.Params): Promise<MateriaPrima[]> {
    try {
      return await Prisma.materiaPrima.findMany({
        where: {
          user_id,
          AND: [
            {
              name: { contains: search, mode: 'insensitive' },
            },
          ],
        },
        orderBy: { id: 'asc' },
      });
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
