import { GetAllMateriasPrimas } from '@/domain/interfaces';
import { GetAllMateriasPrimasService } from '@/domain/services';
import { makeGetAllMateriasPrimasRepository } from '@/main/factories/infra';

export const makeGetAllMateriasPrimasService = (): GetAllMateriasPrimas => {
  return new GetAllMateriasPrimasService(makeGetAllMateriasPrimasRepository());
};
