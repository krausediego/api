import { IFindUser, SignIn } from '@/domain/interfaces';

export class SignInService implements SignIn {
  constructor(private readonly findUser: IFindUser) {}

  public async run(params: SignIn.Params): Promise<SignIn.Response> {
    this.validateFields(params);
    const { emailOrUsername, password } = params;
    const user = await this.findUser.findUserGeneric(
      where: {
        OR: [{ email: emailOrUsername }, { username: emailOrUsername }],
      },
    );
    console.log(user);
    return { message: 'ok' };
  }

  private validateFields(params: SignIn.Params): void {
    if (!params.emailOrUsername) {
      throw new Error('O campo de email ou username é obrigatório');
    }

    if (!params.password) {
      throw new Error('O campo de password é obrigatório');
    }
  }
}
