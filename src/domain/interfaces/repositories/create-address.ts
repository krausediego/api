import { Address } from '@prisma/client';

export interface ICreateAddress {
  createNewAddress(customer: Omit<Address, 'id'>): Promise<Address>;
}
