import { CreateAddress, ICreateAddress } from '@/domain/interfaces';

export class CreateAddressService implements CreateAddress {
  constructor(private readonly createAddress: ICreateAddress) {}

  public async run(
    params: CreateAddress.Params,
  ): Promise<CreateAddress.Response> {
    const address = await this.createAddress.createNewAddress(params);
    return address;
  }
}
