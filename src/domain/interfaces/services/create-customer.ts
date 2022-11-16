import { Customer } from '@prisma/client';

export interface CreateCustomer {
  run(params: CreateCustomer.Params): Promise<CreateCustomer.Response>;
}

export namespace CreateCustomer {
  export type Params = {
    customer: Customer;
  };

  export type Response = {
    message: string;
  };
}
