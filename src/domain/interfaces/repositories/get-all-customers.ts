import { Customer } from '@prisma/client';

export interface IGetAllCustomers {
  findAllCustomers(params: IGetAllCustomers.Params): Promise<Customer[]>;
}

export namespace IGetAllCustomers {
  export type Params = {
    user_id: string;
  };
}
