import { Hash } from '@/domain/interfaces';
import { BcryptHash } from '@/infra/bcrypt';

export const makeHash = (): Hash => {
  return new BcryptHash();
};
