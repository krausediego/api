import {
  GetAllMateriasPrimas,
  IGetAllMateriasPrimas,
} from '@/domain/interfaces';

export class GetAllMateriasPrimasService implements GetAllMateriasPrimas {
  constructor(
    private readonly getAllMateriasPrimasRepository: IGetAllMateriasPrimas,
  ) {}

  public async run(
    params: GetAllMateriasPrimas.Params,
  ): Promise<GetAllMateriasPrimas.Response> {
    const { user_id, search } = params;

    const materiasPrimas =
      await this.getAllMateriasPrimasRepository.findAllMateriasPrimas({
        user_id,
        search,
      });

    return materiasPrimas;
  }
}
