import * as yup from 'yup';

import { getHttpError, noContent } from '../helpers';
import { Http, Middleware } from '../interfaces';

export class UpdateAddressValidator implements Middleware {
  private readonly required = 'Campos obrigatórios faltando.';

  public async handle(request: Http.Request<any>): Promise<Http.Response> {
    try {
      const schema = yup.object().shape({
        id: yup.string().required(this.required),
        address: yup.string(),
        district: yup.string(),
        uf: yup.string(),
        city: yup.string(),
        number: yup.number(),
        reference: yup.string(),
      });

      await schema.validate(request.data.body);

      return noContent();
    } catch (error: any) {
      return getHttpError(error);
    }
  }
}
