import { getHttpError, ok } from '@/application/helpers';
import { Controller, Http } from '@/application/interfaces';
import { GetAllMateriasPrimas } from '@/domain/interfaces/services';

type GetAllMateriasPrimasHandler = () => GetAllMateriasPrimas;
export class GetAllMateriasPrimasController implements Controller {
  constructor(
    private readonly getAllMateriasPrimasService: GetAllMateriasPrimasHandler,
  ) {}

  async handle(request: Http.Request<any>): Promise<Http.Response> {
    try {
      const materiasPrimas = await this.getAllMateriasPrimasService().run(
        request.data,
      );

      return ok(materiasPrimas);
    } catch (error: any) {
      return getHttpError(error);
    }
  }
}
