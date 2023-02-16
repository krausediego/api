import { GetCustomer, IGetCustomer } from '@/domain/interfaces';

export class GetCustomerService implements GetCustomer {
  constructor(private readonly getCustomerRepository: IGetCustomer) {}

  public async run(params: GetCustomer.Params): Promise<GetCustomer.Response> {
    const { customer_id } = params;

    const customer = await this.getCustomerRepository.findCustomer({
      customer_id,
    });

    return customer;
  }
}
