import { GetAllMateriasPrimasController } from '@/application/controllers';
import { Controller } from '@/application/interfaces';
import { makeGetAllMateriasPrimasService } from '@/main/factories/domain';

export const makeGetAllMateriasPrimasController = (): Controller => {
  return new GetAllMateriasPrimasController(makeGetAllMateriasPrimasService);
};
