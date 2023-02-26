import { MateriaPrima } from '@prisma/client';

export interface ICreateMateriaPrima {
  createNewMateriaPrima(materiaPrima: Omit<MateriaPrima, 'id'>): Promise<void>;
}
