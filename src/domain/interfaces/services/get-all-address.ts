import { Address } from '@prisma/client';

export interface GetAllAddress {
  run(params: GetAllAddress.Params): Promise<GetAllAddress.Response>;
}

export namespace GetAllAddress {
  export type Params = {
    user_id: string;
  };

  export type Response = Address[];
}
