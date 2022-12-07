import { Address } from '@prisma/client';

export interface UpdateAddress {
  run(params: UpdateAddress.Params): Promise<UpdateAddress.Response>;
}

export namespace UpdateAddress {
  export type Params = Address;

  export type Response = {
    message: string;
  };
}
