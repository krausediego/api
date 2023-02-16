import * as yup from 'yup';

import { getHttpError, noContent } from '../helpers';
import { Http, Middleware } from '../interfaces';

export class UpdateCustomerValidator implements Middleware {
  private readonly required = 'Campos obrigatórios faltando.';

  private readonly validEmail = 'O email informado esta em formato inválido.';

  public async handle(request: Http.Request<any>): Promise<Http.Response> {
    try {
      const schema = yup.object().shape({
        id: yup.string().required(this.required),
        user_id: yup.string(),
        address_id: yup.string(),
        name: yup.string(),
        email: yup.string().email(this.validEmail),
        phone: yup.string(),
        birth_date: yup.date().nullable(),
        genre: yup.string().nullable(),
        cpf: yup.string().nullable(),
        cnpj: yup.string().nullable(),
        inscricao_estadual: yup.string().nullable(),
      });

      await schema.validate(request.data.body);

      return noContent();
    } catch (error: any) {
      return getHttpError(error);
    }
  }
}
