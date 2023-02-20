import { DeleteCustomer, IDeleteCustomer } from '@/domain/interfaces';

export class DeleteCustomerService implements DeleteCustomer {
  constructor(private readonly deleteCustomer: IDeleteCustomer) {}

  async run(params: DeleteCustomer.Params): Promise<DeleteCustomer.Response> {
    const { customer_id, address_id } = params;

    await this.deleteCustomer.deleteCustomer(customer_id, address_id);

    return { message: 'Cliente excluido com sucesso.' };
  }
}
