import { Controller, Http } from '@/application/interfaces';
import { getHttpError, ok } from '@/application/helpers';
import { GetAllAddress } from '@/domain/interfaces';

type GetAllAddressHandler = () => GetAllAddress;
export class GetAllAddressController implements Controller {
  constructor(private readonly getAllAddressService: GetAllAddressHandler) {}

  public async handle(request: Http.Request<any>): Promise<Http.Response> {
    try {
      const response = await this.getAllAddressService().run(request.data);
      return ok({ ...response });
    } catch (error: any) {
      return getHttpError(error);
    }
  }
}
