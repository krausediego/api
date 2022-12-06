import { Customer } from '@prisma/client';

export interface IUpdateCustomer {
  putCustomer(customer: Customer): Promise<void>;
}
