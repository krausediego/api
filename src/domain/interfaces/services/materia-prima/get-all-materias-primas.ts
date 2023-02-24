import { MateriaPrima } from '@prisma/client';

export interface GetAllMateriasPrimas {
  run(
    params: GetAllMateriasPrimas.Params,
  ): Promise<GetAllMateriasPrimas.Response>;
}

export namespace GetAllMateriasPrimas {
  export type Params = {
    user_id: string;
    search?: string;
  };

  export type Response = MateriaPrima[];
}
