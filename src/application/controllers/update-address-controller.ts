import { Controller, Http } from '@/application/interfaces';
import { getHttpError, ok } from '@/application/helpers';
import { UpdateAddress } from '@/domain/interfaces';

type UpdateAddressHandler = () => UpdateAddress;
export class UpdateAddressController implements Controller {
  constructor(private readonly updateAddressService: UpdateAddressHandler) {}

  public async handle(request: Http.Request<any>): Promise<Http.Response> {
    try {
      const response = await this.updateAddressService().run(request.data);
      return ok({ ...response });
    } catch (error: any) {
      return getHttpError(error);
    }
  }
}
