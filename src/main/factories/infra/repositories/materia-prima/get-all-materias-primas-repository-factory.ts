import { IGetAllMateriasPrimas } from '@/domain/interfaces';
import { GetAllMateriasPrimas } from '@/infra/prisma/repositories';

export const makeGetAllMateriasPrimasRepository = (): IGetAllMateriasPrimas => {
  return new GetAllMateriasPrimas();
};
