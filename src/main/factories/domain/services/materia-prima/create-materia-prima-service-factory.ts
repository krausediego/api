import { CreateMateriaPrima } from '@/domain/interfaces';
import { CreateMateriaPrimaService } from '@/domain/services';
import { makeCreateMateriaPrimaRepository } from '@/main/factories/infra';

export const makeCreateMateriaPrimaService = (): CreateMateriaPrima => {
  return new CreateMateriaPrimaService(makeCreateMateriaPrimaRepository());
};
