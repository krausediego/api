import { Hash, IFindUser, SignIn, Token } from '@/domain/interfaces';
import isNull from 'lodash/isNull';

export class SignInService implements SignIn {
  constructor(
    private readonly findUser: IFindUser,
    private readonly hash: Hash,
    private readonly token: Token,
  ) {}

  public async run(params: SignIn.Params): Promise<SignIn.Response> {
    this.validateFields(params);
    const { emailOrUsername, password } = params;

    const user = await this.findUser.findUserGeneric({
      where: {
        OR: [{ email: emailOrUsername }, { username: emailOrUsername }],
      },
    });

    if (isNull(user)) {
      throw new Error('Email/username ou senha incorretos');
    }

    const passwordMatch = await this.hash.compareHash(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email/username ou senha incorretos!!!!');
    }

    const token = this.token.generateToken({
      id: user.id,
      email: user.email,
      username: user.username,
    });

    return { token };
  }

  private validateFields(params: SignIn.Params): void {
    if (!params.emailOrUsername) {
      throw new Error('O campo de email/username é obrigatório');
    }

    if (!params.password) {
      throw new Error('O campo de password é obrigatório');
    }
  }
}
