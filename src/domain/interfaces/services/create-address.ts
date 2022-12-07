import { Address } from '@prisma/client';

export interface CreateAddress {
  run(params: CreateAddress.Params): Promise<CreateAddress.Response>;
}

export namespace CreateAddress {
  export type Params = Omit<Address, 'id'>;

  export type Response = {
    message: string;
  };
}
