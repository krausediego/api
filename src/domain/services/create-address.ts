import { CreateAddress, ICreateAddress } from '@/domain/interfaces';

export class CreateAddressService implements CreateAddress {
  constructor(private readonly createAddress: ICreateAddress) {}

  public async run(
    params: CreateAddress.Params,
  ): Promise<CreateAddress.Response> {
    await this.createAddress.createNewAddress(params);

    return { message: 'ok' };
  }
}
