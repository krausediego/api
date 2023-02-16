import { Customer } from '@prisma/client';

export interface GetCustomer {
  run(params: GetCustomer.Params): Promise<GetCustomer.Response>;
}

export namespace GetCustomer {
  export type Params = {
    customer_id: string;
  };

  export type Response = Customer | null;
}
