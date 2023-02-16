import { getHttpError, ok } from '@/application/helpers';
import { UpdateCustomer } from '@/domain/interfaces';

import { Controller, Http } from '../../interfaces';

type CreateCustomerHandler = () => UpdateCustomer;
export class UpdateCustomerController implements Controller {
  constructor(private readonly updateCustomerService: CreateCustomerHandler) {}

  public async handle(request: Http.Request<any>): Promise<Http.Response> {
    try {
      const response = await this.updateCustomerService().run(request.data);
      return ok({ response });
    } catch (error: any) {
      return getHttpError(error);
    }
  }
}
