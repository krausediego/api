import { Controller, Http } from '@/application/interfaces';
import { CreateCustomer } from '@/domain/interfaces/services';
import { getHttpError, ok } from '@/application/helpers';

type CreateCustomerHandler = () => CreateCustomer;
export class CreateCustomerController implements Controller {
  constructor(private readonly createCustomerService: CreateCustomerHandler) {}

  public async handle({
    data,
  }: Http.Request<CreateCustomer.Params>): Promise<Http.Response> {
    try {
      console.log('ENTROU AQUi');
      const message = await this.createCustomerService().run(data);

      return ok(message);
    } catch (error: any) {
      console.log('error', error);
      return getHttpError(error);
    }
  }
}
