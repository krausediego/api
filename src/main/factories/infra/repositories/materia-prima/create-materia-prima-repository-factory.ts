import { ICreateMateriaPrima } from '@/domain/interfaces';
import { CreateMateriaPrima } from '@/infra/prisma/repositories';

export const makeCreateMateriaPrimaRepository = (): ICreateMateriaPrima => {
  return new CreateMateriaPrima();
};
