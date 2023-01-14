import { GetAllCustomers, IGetAllCustomers } from '@/domain/interfaces';

export class GetAllCustomersService implements GetAllCustomers {
  constructor(private readonly getAllCustomersRepository: IGetAllCustomers) {}

  public async run(
    params: GetAllCustomers.Params,
  ): Promise<GetAllCustomers.Response> {
    const { user_id, search } = params;

    const customers = await this.getAllCustomersRepository.findAllCustomers({
      user_id,
      search,
    });
    return customers;
  }
}
