export interface IDeleteCustomer {
  deleteCustomer(customer_id: string, address_id: string): Promise<void>;
}
