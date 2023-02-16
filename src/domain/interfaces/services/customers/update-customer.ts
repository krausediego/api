import { Customer } from '@prisma/client';

export interface UpdateCustomer {
  run(params: UpdateCustomer.Params): Promise<UpdateCustomer.Response>;
}

export namespace UpdateCustomer {
  export type Params = Customer;

  export type Response = {
    message: string;
  };
}
