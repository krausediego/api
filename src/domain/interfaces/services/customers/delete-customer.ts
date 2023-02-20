export interface DeleteCustomer {
  run(params: DeleteCustomer.Params): Promise<DeleteCustomer.Response>;
}

export namespace DeleteCustomer {
  export type Params = {
    customer_id: string;
    address_id: string;
  };

  export type Response = {
    message: string;
  };
}
