import { getHttpError, ok } from '@/application/helpers';
import { Controller, Http } from '@/application/interfaces';
import { DeleteCustomer } from '@/domain/interfaces/services';

type DeleteCustomerHandler = () => DeleteCustomer;
export class DeleteCustomerController implements Controller {
  constructor(private readonly deleteCustomerService: DeleteCustomerHandler) {}

  public async handle({
    data,
  }: Http.Request<DeleteCustomer.Params>): Promise<Http.Response> {
    try {
      const message = await this.deleteCustomerService().run(data);

      return ok(message);
    } catch (error: any) {
      return getHttpError(error);
    }
  }
}
