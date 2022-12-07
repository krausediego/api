import { Http, Middleware } from '../interfaces';
import * as yup from 'yup';
import { getHttpError, noContent } from '../helpers';

export class GetAllAddressValidator implements Middleware {
  private readonly required = 'Campos obrigatórios faltando.';

  constructor() {}

  public async handle(request: Http.Request<any>): Promise<Http.Response> {
    try {
      const schema = yup.object().shape({
        user_id: yup.string().required(this.required),
      });

      await schema.validate(request.data.query);

      return noContent();
    } catch (error: any) {
      return getHttpError(error);
    }
  }
}
