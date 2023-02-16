import * as yup from 'yup';

import { getHttpError, noContent } from '../helpers';
import { Http, Middleware } from '../interfaces';

export class CreateAddressValidator implements Middleware {
  private readonly required = 'Campos obrigatórios faltando.';

  public async handle(request: Http.Request<any>): Promise<Http.Response> {
    try {
      const schema = yup.object().shape({
        user_id: yup.string().required('Campo user_id faltando'),
        address: yup.string().required(this.required),
        district: yup.string().required(this.required),
        uf: yup.string().required(this.required),
        city: yup.string().required(this.required),
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
