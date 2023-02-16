import { getHttpError, ok } from '@/application/helpers';
import { Controller, Http } from '@/application/interfaces';
import { CreateAddress } from '@/domain/interfaces';

type CreateAddressHandler = () => CreateAddress;
export class CreateAddressController implements Controller {
  constructor(private readonly createAddressService: CreateAddressHandler) {}

  public async handle(request: Http.Request<any>): Promise<Http.Response> {
    try {
      const response = await this.createAddressService().run(request.data);

      return ok({ ...response });
    } catch (error: any) {
      return getHttpError(error);
    }
  }
}
