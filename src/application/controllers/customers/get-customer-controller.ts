import { getHttpError, ok } from '@/application/helpers';
import { Controller, Http } from '@/application/interfaces';
import { GetCustomer } from '@/domain/interfaces/services';

type GetCustomerHandler = () => GetCustomer;
export class GetCustomerController implements Controller {
  constructor(private readonly getCustomerService: GetCustomerHandler) {}

  async handle(request: Http.Request<any>): Promise<Http.Response> {
    try {
      const customer = await this.getCustomerService().run(request.data);

      return ok(customer);
    } catch (error: any) {
      return getHttpError(error);
    }
  }
}
