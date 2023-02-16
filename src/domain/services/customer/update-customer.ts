import { IUpdateCustomer, UpdateCustomer } from '@/domain/interfaces';

export class UpdateCustomerService implements UpdateCustomer {
  constructor(private readonly updateCustomer: IUpdateCustomer) {}

  public async run(
    params: UpdateCustomer.Params,
  ): Promise<UpdateCustomer.Response> {
    await this.updateCustomer.putCustomer(params);
    return { message: 'ok' };
  }
}
