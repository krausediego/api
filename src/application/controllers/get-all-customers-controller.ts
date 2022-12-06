import { Controller, Http } from '@/application/interfaces';
import { GetAllCustomers } from '@/domain/interfaces/services';
import { getHttpError, ok } from '@/application/helpers';

type GetAllCustomersHandler = () => GetAllCustomers;
export class GetAllCustomersController implements Controller {
  constructor(
    private readonly getAllCustomersService: GetAllCustomersHandler,
  ) {}

  async handle(request: Http.Request<any>): Promise<Http.Response> {
    try {
      const customers = await this.getAllCustomersService().run(request.data);

      return ok({ ...customers });
    } catch (error: any) {
      return getHttpError(error);
    }
  }
}
