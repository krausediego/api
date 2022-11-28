import { Token } from '@/infra/jwt/token';
import { Token as IToken } from '@/domain/interfaces';

export const makeToken = (): IToken => {
  return new Token();
};
