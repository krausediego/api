import { IUpdateAddress, UpdateAddress } from '@/domain/interfaces';
import { Address } from '@prisma/client';

export class UpdateAddressService implements UpdateAddress {
  constructor(private readonly updateAddressRepository: IUpdateAddress) {}

  public async run(params: Address): Promise<UpdateAddress.Response> {
    await this.updateAddressRepository.putAddress(params);
    return { message: 'ok' };
  }
}
