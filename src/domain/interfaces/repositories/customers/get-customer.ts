import { Customer } from '@prisma/client';

export interface IGetCustomer {
  findCustomer(params: IGetCustomer.Params): Promise<Customer | null>;
}

export namespace IGetCustomer {
  export type Params = {
    customer_id: string;
  };
}
