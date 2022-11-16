import { CreateCustomer } from '@/domain/interfaces';

export class CreateCustomerService implements CreateCustomer {
  constructor() {}

  async run(params: CreateCustomer.Params): Promise<CreateCustomer.Response> {
    return { message: 'Test' };
  }
}
