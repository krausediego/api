import { CreateCustomer, ICreateCustomer } from '@/domain/interfaces';

export class CreateCustomerService implements CreateCustomer {
  constructor(private readonly createCustomer: ICreateCustomer) {}

  async run(params: CreateCustomer.Params): Promise<CreateCustomer.Response> {
    await this.createCustomer.createNewCustomer(params);

    return { message: 'Cliente criado com sucesso.' };
  }
}
