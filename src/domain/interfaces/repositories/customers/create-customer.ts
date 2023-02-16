import { Customer } from '@prisma/client';

export interface ICreateCustomer {
  createNewCustomer(customer: Omit<Customer, 'id'>): Promise<void>;
}
