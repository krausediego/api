import { MateriaPrima } from '@prisma/client';

export interface CreateMateriaPrima {
  run(params: CreateMateriaPrima.Params): Promise<CreateMateriaPrima.Response>;
}

export namespace CreateMateriaPrima {
  export type Params = Omit<MateriaPrima, 'id'>;

  export type Response = {
    message: string;
  };
}
