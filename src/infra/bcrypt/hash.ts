import { Hash } from '@/domain/interfaces';
import bcrypt from 'bcryptjs';

export class BcryptHash implements Hash {
  constructor() {}

  public async createHash(key: string): Promise<string> {
    return bcrypt.hash(key, await this.generateSalt());
  }

  public async compareHash(key: string, hash: string): Promise<boolean> {
    return bcrypt.compare(key, hash);
  }

  private async generateSalt(): Promise<string> {
    return bcrypt.genSalt(3);
  }
}
