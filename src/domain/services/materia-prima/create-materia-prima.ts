import { CreateMateriaPrima, ICreateMateriaPrima } from '@/domain/interfaces';

export class CreateMateriaPrimaService implements CreateMateriaPrima {
  constructor(private readonly createMateriaPrima: ICreateMateriaPrima) {}

  async run(
    params: CreateMateriaPrima.Params,
  ): Promise<CreateMateriaPrima.Response> {
    await this.createMateriaPrima.createNewMateriaPrima(params);

    return { message: 'Matéria prima criada com sucesso.' };
  }
}
