import { getHttpError, ok } from '@/application/helpers';
import { Controller, Http } from '@/application/interfaces';
import { CreateMateriaPrima } from '@/domain/interfaces/services';

type CreateMateriaPrimaHandler = () => CreateMateriaPrima;
export class CreateMateriaPrimaController implements Controller {
  constructor(
    private readonly createMateriaPrimaService: CreateMateriaPrimaHandler,
  ) {}

  public async handle({
    data,
  }: Http.Request<CreateMateriaPrima.Params>): Promise<Http.Response> {
    try {
      const message = await this.createMateriaPrimaService().run(data);

      return ok(message);
    } catch (error: any) {
      return getHttpError(error);
    }
  }
}
