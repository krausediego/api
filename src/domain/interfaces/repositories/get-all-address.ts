import { Address } from '@prisma/client';

export interface IGetAllAddress {
  findAllAddress(params: IGetAllAddress.Params): Promise<Address[]>;
}

export namespace IGetAllAddress {
  export type Params = {
    user_id: string;
  };
}
