import { Customer } from '@prisma/client';

export interface CreateCustomer {
  run(params: CreateCustomer.Params): Promise<CreateCustomer.Response>;
}

export namespace CreateCustomer {
  export type Params = Omit<Customer, 'id'>;

  export type Response = {
    message: string;
  };
}
