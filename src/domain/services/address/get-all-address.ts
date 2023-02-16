import { GetAllAddress, IGetAllAddress } from '@/domain/interfaces';

export class GetAllAddressService implements GetAllAddress {
  constructor(private readonly getAllAddressRepository: IGetAllAddress) {}

  public async run(
    params: GetAllAddress.Params,
  ): Promise<GetAllAddress.Response> {
    const { user_id } = params;
    const address = await this.getAllAddressRepository.findAllAddress({
      user_id,
    });
    return { ...address };
  }
}
