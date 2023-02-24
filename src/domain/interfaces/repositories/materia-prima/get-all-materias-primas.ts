import { MateriaPrima } from '@prisma/client';

export interface IGetAllMateriasPrimas {
  findAllMateriasPrimas(
    params: IGetAllMateriasPrimas.Params,
  ): Promise<MateriaPrima[]>;
}

export namespace IGetAllMateriasPrimas {
  export type Params = {
    user_id: string;
    search?: string;
  };
}
