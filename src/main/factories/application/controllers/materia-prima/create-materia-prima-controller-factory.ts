import { CreateMateriaPrimaController } from '@/application/controllers';
import { Controller } from '@/application/interfaces';
import { makeCreateMateriaPrimaService } from '@/main/factories/domain';

export const makeCreateMateriaPrimaController = (): Controller => {
  return new CreateMateriaPrimaController(makeCreateMateriaPrimaService);
};
